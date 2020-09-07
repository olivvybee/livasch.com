---
layout: article
title: How to Set up Netlify CMS Previews with Next.js
date: 2020-09-07T20:15:52.872Z
---
As part of [rebuilding my website to use Next.js and Netlify CMS](/2020/09/06/on-to-the-next-js-thing), I wanted to reuse components I made for [Next.js](https://nextjs.org) as the editor preview in [Netlify CMS](https://netlifycms.org). Unfortunately for me, I couldn't find any resources about how to do so.

After lots of trial and error, I found a way to initialize the CMS as part of a Next.js page, so I was able to import other components to use as the preview. Here's how I did it. <!-- more -->

> **Disclaimer**
>
> I am not claiming that this is the absolute best way to do this. It is simply the method I discovered. One particular thing to note is that the CMS can take a few seconds to load, since it only starts loading after the first render.

I'm going to assume that you have a Next.js site set up and that you want the CMS to be available at `/admin`.

First of all, if you already have Netlify CMS set up using the `<script>` tag method, you'll want to remove that page (`/public/admin/index.html`). In fact, go ahead and remove the entire `/public/admin` directory, because you won't be serving any static files for the admin page anymore.

Next, install the [`netlify-cms-app`](https://www.npmjs.com/packages/netlify-cms-app) package. We're going to use this to initialise and customise the CMS.

```
yarn add netlify-cms-app
```

Now create a new admin page in Next.js by creating a `/pages/admin.js` file. To start with, just put a blank component in there so that the page loads but doesn't display anything.

```javascript
const Admin = () => <div />;

export default Admin;
```

To actually load and display the CMS, we need to import the `netlify-cms-app` module. But here's the issue: as soon as the module is imported, it'll try to access the global `window` object. That won't work because Next.js will try to prerender or server-side render the page, so `window` will be undefined and the page will crash.

Instead, we'll use a dynamic import to only import the module once we know `window` is defined. We'll do that using the React `useEffectHook` and an inline anonymous async function (since dynamic imports are asynchronous).

```javascript
import { useEffect } from 'react';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
    })();
  }, []);

  return <div />;
}
```

To break this down a bit:

- We use `useEffect` since it will run the code we specify after the first render, when `window` is defined.
- We define an anonymous async function and then call it immediately. This is because `useEffect` doesn't allow the callback itself to be asynchronous.
- We `await` the import, and then access the default export of the module; that's the CMS object we need.
- The dependencies of `useEffect` are an empty array `[]` because this should only be run once, after the first render.