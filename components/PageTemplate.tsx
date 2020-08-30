import React from 'react';
import Head from 'next/head';

import siteConfig from '../siteconfig.json';

import Header from './Header';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';
import { Column, FlexibleSpacer } from './Layout';
import { styled } from './Theming';

const PageContainer = styled(Column)({
  minHeight: '100vh',
});
PageContainer.displayName = 'PageContainer';

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

      <PageContainer>
        <Header />
        <main>{children}</main>
        <FlexibleSpacer />
        <Footer />
      </PageContainer>
    </>
  );
};

PageTemplate.displayName = 'PageTemplate';

export default PageTemplate;
