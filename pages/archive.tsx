import React from 'react';
import { GetStaticProps } from 'next';
import _groupBy from 'lodash/groupBy';
import moment from 'moment';

import { Post } from '../interfaces';
import PageTemplate from '../components/PageTemplate';
import { getAllPosts } from '../utils/getAllPosts';
import { Spacer, Column, Row } from '../components/Layout';
import { useTheme } from '../components/Theming';
import Link from '../components/Link';

interface ArchiveProps {
  posts: Post[];
}

const Archive: React.FC<ArchiveProps> = ({ posts }) => {
  const groupedPosts: { [year: string]: Post[] } = posts.reduce(
    (grouped, post) => {
      const [year] = post.date.split('-');
      const yearEntries = grouped[year] || [];
      yearEntries.push(post);
      return {
        ...grouped,
        [year]: yearEntries,
      };
    },
    {}
  );

  const theme = useTheme();

  return (
    <PageTemplate>
      <Column>
        <h1>Archive</h1>
        <Spacer height={16} />
        <p>This is a list of every post I've written on this site.</p>
        <Spacer height={48} />
        <Column gridGap={48}>
          {Object.entries(groupedPosts)
            .reverse()
            .map(([year, posts]) => (
              <Column gridGap={16} key={year}>
                <h2>{year}</h2>
                <ul css={{ paddingLeft: 0 }} role='list'>
                  {posts.map(({ title, date, url }) => (
                    <li
                      key={url}
                      css={{
                        '::before': { display: 'none' },
                        ':not(:last-of-type)': { marginBottom: 12 },
                      }}>
                      <Row alignItems='flex-start'>
                        <span
                          css={{
                            width: 80,
                            color: theme.colours.textSecondary,
                            flexShrink: 0,
                          }}>
                          {moment(date).format('MMM DD')}
                        </span>
                        <div>
                          <Link href='/[...slug]' as={url}>
                            {title}
                          </Link>
                        </div>
                      </Row>
                    </li>
                  ))}
                </ul>
              </Column>
            ))}
        </Column>
      </Column>
    </PageTemplate>
  );
};

export default Archive;

export const getStaticProps: GetStaticProps<ArchiveProps> = async () => ({
  props: {
    posts: getAllPosts(),
  },
});
