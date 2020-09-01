import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Post } from '../interfaces';
import { Column } from './Layout';

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <Column gridGap={64}>
    {posts.map(({ title, date, tags, body, url }) => {
      const [excerpt, rest] = body.split('<!-- more -->');

      return (
        <article key={url}>
          <h2>{title}</h2>
          <span>{date}</span>

          <ReactMarkdown source={excerpt} />

          {!!rest && <span>Read the rest...</span>}
        </article>
      );
    })}
  </Column>
);

PostList.displayName = 'PostList';

export default PostList;
