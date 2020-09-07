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

