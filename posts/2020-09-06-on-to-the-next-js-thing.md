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