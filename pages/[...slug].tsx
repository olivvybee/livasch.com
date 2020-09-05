import { GetStaticProps, GetStaticPaths } from 'next';
import moment from 'moment';
import 'moment/locale/en-gb';

import { Post } from '../interfaces';
import { parsePostContent } from '../utils/parsePostContent';
import { getAllPosts } from '../utils/getAllPosts';
import PageTemplate from '../components/PageTemplate';
import { Column, Spacer } from '../components/Layout';
import PostHeader from '../components/PostHeader';
import Markdown from '../components/Markdown';
import { getExcerpt } from '../utils/getExcerpt';

moment.locale('en-gb');

interface PostUrlQuery {
  slug: string[];
  [key: string]: string | string[];
}

const PostPage = ({ title, date, tags, body, url }: Post) => {
  const description = getExcerpt({ body, maxWordCount: 50 });

  return (
    <PageTemplate title={title} description={description} url={url}>
      <Column>
        <PostHeader title={title} date={date} />
        <Spacer height={24} />
        <Markdown source={body.replace('<!-- more -->', '')} />
      </Column>
    </PageTemplate>
  );
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
