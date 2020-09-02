import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import _sortBy from 'lodash/sortBy';

import { Post } from '../../interfaces';
import PostList from '../../components/PostList';
import { Column, Row } from '../../components/Layout';
import { getAllPosts } from '../../utils/getAllPosts';
import siteConfig from '../../siteconfig.json';
import PageTemplate from '../../components/PageTemplate';
import Pagination from '../../components/Pagination';

interface PaginatedPostListQuery {
  pageNumber: string;
  [key: string]: string;
}

interface PaginatedPostListProps {
  posts: Post[];
  pageNumber: number;
  hasNewerPosts: boolean;
  hasOlderPosts: boolean;
}

const PaginatedPostList: React.FC<PaginatedPostListProps> = ({
  posts,
  pageNumber,
  hasNewerPosts,
  hasOlderPosts,
}) => (
  <PageTemplate>
    <Column gridGap={32}>
      <PostList posts={posts} />

      <Pagination
        newerPostsPageNumber={hasNewerPosts ? pageNumber - 1 : undefined}
        olderPostsPageNumber={hasOlderPosts ? pageNumber + 1 : undefined}
      />
    </Column>
  </PageTemplate>
);

PaginatedPostList.displayName = 'PaginatedPostList';

export default PaginatedPostList;

export const getStaticProps: GetStaticProps<
  PaginatedPostListProps,
  PaginatedPostListQuery
> = async ({ ...ctx }) => {
  const pageNumber = Number(ctx.params.pageNumber);
  const posts = getAllPosts();

  const start = (pageNumber - 1) * siteConfig.paginationLength;
  const end = start + siteConfig.paginationLength;

  const hasNewerPosts = start > 0;
  const hasOlderPosts = end < posts.length;

  console.log(posts.length, end);

  const filteredPosts = _sortBy(posts, 'date').reverse().slice(start, end);

  return {
    props: {
      posts: filteredPosts,
      pageNumber,
      hasNewerPosts,
      hasOlderPosts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const pageCount = Math.ceil(posts.length / siteConfig.paginationLength);

  const paths: string[] = [];
  for (let i = 1; i <= pageCount; i++) {
    paths.push(`/page/${i}`);
  }

  return {
    paths,
    fallback: false,
  };
};
