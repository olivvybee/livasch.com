import React from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

import { Post } from '../interfaces';

import { Column, Spacer } from './Layout';
import Link from './Link';
import Metadata from './PostHeader';
import PostHeader from './PostHeader';

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <Column gridGap={64}>
    {posts.map(({ title, date, tags, body, url }) => {
      const [excerpt, rest] = body.split('<!-- more -->');

      return (
        <article key={url}>
          <Column>
            <PostHeader title={title} date={date} url={url} tag='h2' />

            <Spacer height={24} />

            <ReactMarkdown source={excerpt} />

            {!!rest && <span>Read the rest...</span>}
          </Column>
        </article>
      );
    })}
  </Column>
);

PostList.displayName = 'PostList';

export default PostList;
