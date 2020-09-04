import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import PageTemplate from '../components/PageTemplate';
import ContactLinks from '../components/ContactLinks';
import Markdown from '../components/Markdown';
import { parsePageContent } from '../utils/parsePageContent';
import { getAllPages } from '../utils/getAllPages';
import { Column, Spacer } from '../components/Layout';

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
    colour: string;
  }[];
}

const Page = ({ title, body, contactLinks }: PageProps) => (
  <PageTemplate title={title}>
    <Column>
      <Markdown source={body} />

      {contactLinks.length && (
        <>
          <Spacer height={24} />
          <hr />
          <ContactLinks links={contactLinks} />
        </>
      )}
    </Column>
  </PageTemplate>
);

export default Page;

export const getStaticProps: GetStaticProps<PageProps, PageUrlQuery> = async ({
  ...ctx
}) => {
  const { slug } = ctx.params;

  const content = await import(`../pageContent/${slug}.md`);

  const page = parsePageContent(content, slug);

  return {
    props: {
      ...page,
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

  const paths = getAllPages().map((page) => page.url);

  return {
    paths,
    fallback: false,
  };
};
