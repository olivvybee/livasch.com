import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

interface PageUrlQuery {
  slug: string;
  [key: string]: string;
}

interface PageProps {
  title: string;
  body: string;
  contactLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}

const Page = ({ title, body, contactLinks }: PageProps) => (
  <ReactMarkdown source={body} />
);

export const getStaticProps: GetStaticProps<PageProps, PageUrlQuery> = async ({
  ...ctx
}) => {
  const { slug } = ctx.params;

  const content = await import(`../pageContent/${slug}.md`);

  const data = matter(content.default);

  return {
    props: {
      title: data.data.title,
      body: data.content,
      contactLinks: data.data.contactLinks || [],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key) => {
      return key.replace(/^.*[\\\/]/, '').slice(0, -3);
    });
    return data;
  })(require.context('../pageContent', true, /\.md$/));

  const paths = slugs.map((slug) => `/${slug}`);

  return {
    paths,
    fallback: false,
  };
};

export default Page;
