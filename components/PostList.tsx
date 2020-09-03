import React from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

import { Post } from '../interfaces';

import { Column, Spacer } from './Layout';
import Link from './Link';
import Metadata from './PostHeader';
import PostHeader from './PostHeader';
import IconLink from './IconLink';
import { useTheme } from './Theming';

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const theme = useTheme();

  return (
    <Column gridGap={48}>
      {posts.map(({ title, date, tags, body, url }, index) => {
        const [excerpt, rest] = body.split('<!-- more -->');

        return (
          <article
            key={url}
            css={{
              paddingBottom: 48,
              borderBottom: `1px solid ${theme.colours.separator}`,
            }}>
            <Column>
              <PostHeader title={title} date={date} url={url} tag='h2' />

              <Spacer height={24} />

              <ReactMarkdown source={excerpt} />

              {!!rest && (
                <>
                  <Spacer height={32} />
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
          </article>
        );
      })}
    </Column>
  );
};

PostList.displayName = 'PostList';

export default PostList;
