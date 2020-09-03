import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Post } from '../interfaces';

import { Column, Spacer } from './Layout';
import PostHeader from './PostHeader';
import IconLink from './IconLink';
import Pagination from './Pagination';

interface PostListProps {
  posts: Post[];
  pageNumber: number;
  hasOlderPosts: boolean;
  hasNewerPosts: boolean;
}

const PostList: React.FC<PostListProps> = ({
  posts,
  pageNumber,
  hasNewerPosts,
  hasOlderPosts,
}) => (
  <Column gridGap={32}>
    <Column gridGap={64}>
      {posts.map(({ title, date, tags, body, url }) => {
        const [excerpt, rest] = body.split('<!-- more -->');

        return [
          <article key={url}>
            <Column>
              <PostHeader title={title} date={date} url={url} tag='h2' />

              <Spacer height={24} />

              <ReactMarkdown source={excerpt} />

              {!!rest && (
                <>
                  <Spacer height={24} />
                  <div css={{ width: 'max-content' }}>
                    <IconLink
                      flipped
                      icon={'arrow-right'}
                      href='/[...slug]'
                      as={url}
                      gridGap={8}>
                      Read the rest
                    </IconLink>
                  </div>
                </>
              )}
            </Column>
          </article>,

          <hr />,
        ];
      })}
    </Column>

    <Pagination
      newerPostsPageNumber={hasNewerPosts ? pageNumber - 1 : undefined}
      olderPostsPageNumber={hasOlderPosts ? pageNumber + 1 : undefined}
    />
  </Column>
);

PostList.displayName = 'PostList';

export default PostList;
