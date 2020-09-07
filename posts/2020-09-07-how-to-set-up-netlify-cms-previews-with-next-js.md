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

I'm going to assume that you have a Next.js site set up and that the CMS is set up to be available at `/admin` using the `<script>` tag method.

First of all, you'll want to remove the page that's currently hosting the CMS (`/public/admin/index.html`). Then, move the Netlify CMS `config.yml` to the top level of the `public` directory.

Next, install the [`netlify-cms-app`](https://www.npmjs.com/packages/netlify-cms-app) package. We're going to use this to initialise and customise the CMS.

```
yarn add netlify-cms-app
```

Now create a new admin page in Next.js by creating a `/pages/admin.js` file. To start with, just put a blank component in there so that the page loads but doesn't display anything.

```jsx
const Admin = () => <div />;

export default Admin;
```

To actually load and display the CMS, we need to import the `netlify-cms-app` module. But here's the issue: as soon as the module is imported, it'll try to access the global `window` object. That won't work because Next.js will try to prerender or server-side render the page, so `window` will be undefined and the page will crash.

Instead, we'll use a dynamic import to only import the module once we know `window` is defined. We'll do that using the React `useEffectHook` and an inline anonymous `async` function (since dynamic imports are asynchronous).

```jsx
import { useEffect } from 'react';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();
    })();
  }, []);

  return <div />;
}
```

To break this down a bit:

- We use `useEffect` since it will run the code after the first render, when `window` is defined.
- We define an anonymous `async` function and then call it immediately. This is because `useEffect` doesn't allow the callback itself to be asynchronous.
- We `await` the import, and then access the default export of the module; that's the CMS object we need.
- Once the module has been imported, we initialise the CMS by calling `init()`. This loads the CMS and causes it to replace the current page (which was blank).
- The dependencies of `useEffect` are an empty array `[]` because this should only be run once, after the first render.

At this point opening `/admin` in the browser should display the Netlify CMS. If you get an error about not being able to find the config, make sure you moved `/public/admin/config.yml` up to `/public/config.yml`.

So far all we have achieved is replicating the existing setup. Let's move on to actually creating an editor preview.

The important function we need is [`CMS.registerPreviewTemplate`](https://www.netlifycms.org/docs/customization/#registerpreviewtemplate). This allows us to register a React component for rendering the preview for a given collection in Netlify CMS.

The CMS will pass a number of props to this component, but we're only interested one for now: `entry`. This is an [Immutable.js `Map`](https://immutable-js.github.io/immutable-js/docs/#/Map) containing all the data about the entry. It will contain a key/value pair for each field defined for the collection.

Since I assume you already know how you want to render a preview, I'm going to assume that you have a collection called `article` and you've already created a component called `ArticlePreview` at `/components/ArticlePreview.js`. You'll need to update this component to accept the `entry` prop and extract the metdata from it.

Assuming an `article` has three fields – `title`, `date`, and `body` – here's how the component would extract the data to render it:

```jsx
const ArticlePreview = ({ entry }) => {
  const title = entry.getIn(['data', 'title']);
  const date = entry.getIn(['data', 'date']);
  const body = entry.getIn(['data', 'body']);

  return (
    <div>
      {/* Render the preview here... */}
    </div>
  );
}
```

Here's how to register that component as the article preview:

```jsx
import { useEffect } from 'react';

import ArticlePreview from '../components/ArticlePreview';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();

      CMS.registerPreviewTemplate('article', ArticlePreview)
    })();
  }, []);

  return <div />;
}
```

All interaction with the `CMS` object has to be done in the `async` function, otherwise it will try to execute before the CMS is initialised.

At this point, opening an entry in the CMS should display using the preview component you defined and registered! I'd recommend reading up on [`registerPreviewTemplate`](https://www.netlifycms.org/docs/customization/#registerpreviewtemplate) to see what other props it passes, if you need to make more complex previews.