import React from 'react';
import Head from 'next/head';

import siteConfig from '../siteconfig.json';

import GlobalStyles from './GlobalStyles';

interface PageTemplateProps {
  title?: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children, title }) => {
  const pageTitle = !!title
    ? `${title} – ${siteConfig.title}`
    : siteConfig.title;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <GlobalStyles />

      <header>
        <h1>Liv Asch</h1>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

PageTemplate.displayName = 'PageTemplate';

export default PageTemplate;
