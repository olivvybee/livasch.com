import { GetStaticProps } from 'next';
import Head from 'next/head';
import _sortBy from 'lodash/sortBy';

import PageTemplate from '../components/PageTemplate';
import PostList from '../components/PostList';
import { Post } from '../interfaces';
import siteConfig from '../siteconfig.json';
import { getAllPosts } from '../utils/getAllPosts';
import ScreenReaderOnly from '../components/ScreenReaderOnly';

interface IndexProps {
  posts: Post[];
  hasOlderPosts: boolean;
}

const Index: React.FC<IndexProps> = ({ posts, hasOlderPosts }) => (
  <>
    <PageTemplate>
      <ScreenReaderOnly>
        <h1>{siteConfig.title}</h1>
      </ScreenReaderOnly>
      <PostList
        posts={posts}
        pageNumber={1}
        hasNewerPosts={false}
        hasOlderPosts={hasOlderPosts}
      />
    </PageTemplate>
  </>
);

export default Index;

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const posts = getAllPosts();
  const filteredPosts = posts.slice(0, siteConfig.paginationLength);

  const hasOlderPosts = filteredPosts.length < posts.length;

  return {
    props: {
      posts: filteredPosts,
      hasOlderPosts,
    },
  };
};
