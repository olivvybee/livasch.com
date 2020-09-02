import { GetStaticProps } from 'next';
import Head from 'next/head';
import _sortBy from 'lodash/sortBy';

import PageTemplate from '../components/PageTemplate';
import PostList from '../components/PostList';
import { Post } from '../interfaces';
import siteConfig from '../siteconfig.json';
import { getAllPosts } from '../utils/getAllPosts';
import { Column } from '../components/Layout';
import Pagination from '../components/Pagination';

interface IndexProps {
  posts: Post[];
  hasOlderPosts: boolean;
}

const Index: React.FC<IndexProps> = ({ posts, hasOlderPosts }) => (
  <>
    <Head>
      <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
    </Head>

    <PageTemplate>
      <Column>
        <PostList posts={posts} />
        <Pagination olderPostsPageNumber={hasOlderPosts ? 2 : undefined} />
      </Column>
    </PageTemplate>

    <script src='/scripts/netlify-identity.js'></script>
  </>
);

export default Index;

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const posts = getAllPosts();
  const filteredPosts = _sortBy(posts, 'date')
    .reverse()
    .slice(0, siteConfig.paginationLength);

  const hasOlderPosts = filteredPosts.length < posts.length;

  return {
    props: {
      posts: filteredPosts,
      hasOlderPosts,
    },
  };
};
