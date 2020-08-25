import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { GetStaticProps, GetStaticPaths } from 'next';
import moment from 'moment';

interface PostUrlQuery {
  year: string;
  month: string;
  day: string;
  slug: string;
  [key: string]: string;
}

interface PostProps {
  body: string;
  metadata: {
    [key: string]: string;
  };
}

const Post = ({ body, metadata }: PostProps) => {
  if (!metadata) {
    return null;
  }

  return <ReactMarkdown source={body} />;
};

export default Post;

export const getStaticProps: GetStaticProps<PostProps, PostUrlQuery> = async ({
  ...ctx
}) => {
  const { year, month, day, slug } = ctx.params;

  const content = await import(
    `../../../../posts/${year}-${month}-${day}-${slug}.md`
  );
  const config = await import(`../../../../siteconfig.json`);
  const data = matter(content.default);

  const metadata = {
    ...data.data,
    date: !!data.data.date ? moment(data.data.date).toISOString() : undefined,
  };

  return {
    props: {
      siteTitle: config.title,
      metadata,
      body: data.content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key) => {
      const slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);

      const datePortion = slug.split('-').slice(0, 3);
      const namePortion = slug.split('-').slice(3);

      return `${datePortion.join('/')}/${namePortion.join('-')}`;
    });
    return data;
  })(require.context('../../../../posts', true, /\.md$/));

  const paths = slugs.map((slug) => `/${slug}`);

  return {
    paths,
    fallback: false,
  };
};
