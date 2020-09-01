import { GetStaticProps } from 'next';
import Head from 'next/head';
import _sortBy from 'lodash/sortBy';

import PageTemplate from '../components/PageTemplate';
import PostList from '../components/PostList';
import { Post } from '../interfaces';
import siteConfig from '../siteconfig.json';
import { getAllPosts } from '../utils/getAllPosts';

interface IndexProps {
  posts: Post[];
}

const Index: React.FC<IndexProps> = ({ posts }) => (
  <>
    <Head>
      <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
    </Head>

    <PageTemplate>
      <PostList posts={posts} />
    </PageTemplate>

    <script src='/scripts/netlify-identity.js'></script>
  </>
);

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  const filteredPosts = _sortBy(posts, 'date')
    .reverse()
    .slice(0, siteConfig.paginationLength);

  return {
    props: {
      posts: filteredPosts,
    },
  };
};
