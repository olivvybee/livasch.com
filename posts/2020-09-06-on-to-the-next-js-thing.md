---
layout: article
title: On to the Next(.js) Thing
date: 2020-09-06T19:27:06.666Z
---
For my first post in almost two years, and to go along with the redesign I've just rolled out, here's the story of why and how I rebuilt this site from scratch on an entirely new technology stack. <!-- more -->

## The bad times

For nearly seven years, this site was hosted on [Github Pages](https://pages.github.com/). There are many benefits to that, the main one being that it's totally free to use. It also means all the content is stored as plain text files, rather than being in a database somewhere, and by the nature of git, the version history is baked right in.

However, I had one major problem with it: editing content required checking out the repository, manually adding a markdown file with the right name and the right metadata at the top, and committing it back to git to wait for it to be processed and published. It's an extremely cumbersome process, and I would usually have to copy an existing file and edit the metadata, because I could never remember the format.

That friction was (partially) responsible for the... *lackluster* amount of content I was writing. If I had an idea for something to write, especially if I was using my iPad, I just couldn't be bothered to go through that workflow.

One of my other issues was that since Github Pages uses Jekyll as its static site generator, running the site locally involved getting a Ruby environment set up with all the right gems used by Github.

It has honestly been about four years since I last successfully ran the old site locally on my machine, because it would always fail with some cryptic error or another. So my process for making structural or design changes was to edit the code directly on github.com, press commit, and wait for it to deploy to see if it worked. Not great.

Some time in 2019, I decided I wanted to totally redesign the site, and use it as a starting point for getting back into writing. By then, I had settled in at Amazon spending all day working on React apps. I had less and less desire to maintain my Ruby-based Github Pages site; if I was going to put in a load of effort to rebuild the site, I wanted to use React.

## A tale of three accidents

I don't remember the exact circumstances, but somehow I stumbled across [Next.js](https://nextjs.org), a React-based framework capable of acting as a static site generator. Using an SSG was important to me because the then-current iteration of my site was statically generated and therefore loaded instantly. While I could have created a React frontend to a CMS like Wordpress, as far as I knew, I'd have to be loading content at render time, which would be a big step down from the pure HTML I was serving up to that point.

So I had my generator. But how was I going to host the content? Github Pages certainly doesn't support Next.js, so I would have had to generate the content locally, then manually commit and push to deploy it. That's even more friction than the previous workflow (and totally impossible on an iPad).

Through another total accident, at some point I found [Netlify](https://netlify.com), a platform that can be hooked up to a git repository, execute any custom build step, and host the resulting content. If it sounds entirely perfect for what I needed... that's because it is. I could create my Next.js site, commit the content as markdown files (same as with Jekyll), and Netlify would build the app and host it for me. Amazing!

But what if it could get even better? Sure, I could build the site as a React app and get the benefits of a static site, but I was still going to have to edit raw markdown files, weird formatting and all. That's where [Netlify CMS](https://www.netlifycms.org/) comes in. It's a single-page React app that can be embedded into any site, and (as the name suggests) acts as a CMS.

Its primary way of working is creating and updating markdown files in git with special metadata stored at the top. Sound familiar? It's basically automating away the painful process I was going through before! And just like Next.js and Netlify before it, it was pure coincidence that I learned about Netlify CMS.

## Time to build

Armed with my site generator, my hosting platform, and my CMS, on 24th August 2020 I [got to work](https://github.com/olivvysaur/livasch.com/commit/f2139eb5307b5f8c888fe2df67fbc1ad85118269). I found an extremely helpful tutorial by Cassidy Williams, [Building a Markdown blog with Next 9.4 and Netlify](https://www.netlify.com/blog/2020/05/04/building-a-markdown-blog-with-next-9.4-and-netlify/) – exactly what I was trying to do.

First I got Next.js set up to read posts from markdown files and render them with [`react-markdown`](https://www.npmjs.com/package/react-markdown). Then, I set up Netlify to run `next export`, which gets Next.js to export static HTML for the site. Finally, I got Netlify CMS set up to read and write those same markdown files being used to render posts.

After that it was "simply" a case of designing and building the actual frontend. The only interesting thing to point out here is my use of [Emotion](https://emotion.sh) and [Emotion theming](https://emotion.sh/docs/theming); instead of using a big CSS file and `--var`s, common definitions like fonts and colours are defined in a [theme](https://github.com/olivvysaur/livasch.com/blob/main/theme.json) and then used in styled React components.

## The going gets tough

Once the frontend was built, there were two more things to do: an RSS feed, and proper styling for the editor preview in the CMS.

RSS was tricky because pages in Next.js are designed to render React on an HTML page. RSS is... not that. It's an XML document describing the feed and its entries. I did a bit of research and couldn't find a solution I was happy with.

One person suggested [creating an "API route" which builds the feed](https://ironeko.com/posts/how-to-add-an-rss-feed-to-your-next-js-site) when the request comes in. Not ideal given that by definition, my feed can only change at build time, so there's no need for so much dynamism.

[Another suggestion](https://logana.dev/blog/rss-feeds-in-a-nextjs-site) involved a build-time script (perfect) but required editing the site's Webpack config to compile the script to the right place before it runs (inelegant). 

My final implementation also uses a build-time script, but it's a simple Node.js script that runs with [ts-node](https://www.npmjs.com/package/ts-node) and simply creates an XML file in the `public` directory, which Next.js serves as-is. I simply added a new `generate-rss` script to my `package.json` and added it to the `build` script so it gets regenerated on every build.

More of a challenge was the Netlify CMS editor preview. When editing a post in the CMS, you get a side-by-side view with the editable text on the left and a preview on the right. By default, the preview has no styling, so it's just a boring HTML document:

![Screenshot of Netlify CMS with the text editor on the left and a plain back and white HTML preview on the right.](/img/2020-09-netlify-cms-preview-no-style.png)

It works, but I'd rather see how the post will look once it's actually published. Thankfully, Netlify CMS exposes a [`registerPreviewTemplate`](https://www.netlifycms.org/docs/customization/#registerpreviewtemplate) function that allows you to do just that. Just give it a React component that renders the preview given the content passed in as props.

The hard part is how and where to actually call this function. Originally I had installed Netlify CMS by adding a `script` tag and pulling it from a CDN. The problem with that is it's used on a plain HTML page, so I didn't have access to any of the React components from the Next.js app I'd already made, like the layout for a post.

Unlike the RSS feed, I couldn't find anyone else who had even attempted to use components from Next.js and put them into the editor preview. I had to figure this one out myself.

Eventually I found a way to use the [`netlify-cms-app`](https://www.npmjs.com/package/netlify-cms-app) NPM package to run the CMS, rather than a static HTML file and the CDN. This allowed me to initialise the CMS in the context of Next.js, giving me access to the other components I'd created. All I did then was create a preview component which extracts the post content from its props and renders the exact same component that I use for posts on the actual site.

Now when I'm editing a post, I can see a live-updating version of it in the preview that looks identical to the page that will be deployed once I publish it – a million times better than editing a raw markdown file in VS Code.

![Screenshot of Netlify CMS with the text editor on the left and a fully styled preview on the right that matches this website's style.](/img/2020-09-netlify-cms-preview-styled.png)

## The end... for now

Implementing the preview was the last thing I did before publishing the redesigned and rebuilt site. I'm very happy with how it turned out – not only does the new version look nicer, but it's much easier to work with, and it has good accessibility too.

That being said, software is never truly *done*... there are still a few more features I'd like to add in future. But for now, I'm happy to share what I've made, and hopefully it'll lead to more than one post every two years.