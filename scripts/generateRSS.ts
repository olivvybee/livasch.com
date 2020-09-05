import fs from 'fs';
import path from 'path';

import { Feed } from 'feed';
import moment from 'moment';
import marked from 'marked';

import { parsePostContent } from '../utils/parsePostContent';
import siteConfig from '../siteconfig.json';

const date = moment();

const feed = new Feed({
  title: siteConfig.title,
  id: siteConfig.url,
  link: siteConfig.url,
  updated: date.toDate(),
  language: 'en-GB',
  copyright: `© ${siteConfig.copyrightStart}-${date.year()} ${
    siteConfig.author
  }`,
  feedLinks: {
    atom: `${siteConfig.url}/atom.xml`,
  },
  author: {
    name: siteConfig.author,
    link: `${siteConfig.url}/about`,
  },
});

const postsDirectory = path.resolve(__dirname, '..', 'posts');
const files = fs.readdirSync(postsDirectory);

files.reverse().forEach((filename) => {
  const content = fs.readFileSync(path.join(postsDirectory, filename), 'utf-8');
  let slug = filename.replace(/^.*[\\\/]/, '').slice(0, -3);
  const post = parsePostContent({ default: content }, slug);

  const html = marked(post.body);

  feed.addItem({
    title: post.title,
    id: `${post.url}`,
    link: `${siteConfig.url}${post.url}`,
    content: html,
    date: moment(post.date).toDate(),
  });
});

const outputPath = path.resolve(__dirname, '..', 'public', 'atom.xml');
fs.writeFileSync(outputPath, feed.atom1());
