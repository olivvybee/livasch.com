import ReactMarkdown from 'react-markdown';
import { GetStaticProps, GetStaticPaths } from 'next';
import moment from 'moment';
import 'moment/locale/en-gb';

import { Post } from '../interfaces';
import { parsePostContent } from '../utils/parsePostContent';
import { getAllPosts } from '../utils/getAllPosts';
import PageTemplate from '../components/PageTemplate';
import { Column } from '../components/Layout';
import PostHeader from '../components/PostHeader';

moment.locale('en-gb');

interface PostUrlQuery {
  slug: string[];
  [key: string]: string | string[];
}

const PostPage = ({ title, date, tags, body }: Post) => (
  <PageTemplate title={title}>
    <Column gridGap={32}>
      <PostHeader title={title} date={date} />
      <ReactMarkdown source={body} />
    </Column>
  </PageTemplate>
);

export default PostPage;

export const getStaticProps: GetStaticProps<Post, PostUrlQuery> = async ({
  ...ctx
}) => {
  const { slug: fullUrl } = ctx.params;

  const [year, month, day, slug] = fullUrl;

  const content = await import(`../posts/${year}-${month}-${day}-${slug}.md`);

  const post = parsePostContent(content);

  return {
    props: {
      ...post,
      url: `/${year}/${month}/${day}/${slug}`,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPosts().map((post) => post.url);

  return {
    paths,
    fallback: false,
  };
};
