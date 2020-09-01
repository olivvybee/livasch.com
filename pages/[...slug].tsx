import ReactMarkdown from 'react-markdown';
import { GetStaticProps, GetStaticPaths } from 'next';

import { Post } from '../interfaces';
import { parsePostContent } from '../utils/parsePostContent';
import { getAllPosts } from '../utils/getAllPosts';

interface PostUrlQuery {
  slug: string[];
  [key: string]: string | string[];
}

const PostPage = ({ title, date, tags, body }: Post) => {
  return <ReactMarkdown source={body} />;
};

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
