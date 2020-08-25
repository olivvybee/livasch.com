import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

interface IndexProps {
  title: string;
  description: string;
}

const Index = ({ title, description }: IndexProps) => {
  return (
    <>
      <Head>
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
      </Head>

      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <script src='/scripts/netlify-identity.js'></script>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
};
