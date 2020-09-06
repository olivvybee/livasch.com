---
layout: article
title: On to the Next(.js) Thing
date: 2020-09-06T12:53:36.479Z
---
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