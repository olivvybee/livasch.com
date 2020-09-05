import React from 'react';
import Head from 'next/head';

import siteConfig from '../siteconfig.json';
import { getExcerpt } from '../utils/getExcerpt';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import GlobalStyles from './GlobalStyles';
import { Column, FlexibleSpacer, Row, Spacer } from './Layout';
import { styled } from './Theming';
import SkipLink from './SkipLink';

const PageContainer = styled(Column)({
  minHeight: '100vh',
});
PageContainer.displayName = 'PageContainer';

interface PageTemplateProps {
  title?: string;
  description?: string;
  url?: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  title,
  description,
  url = '',
}) => {
  const pageTitle = !!title
    ? `${title} – ${siteConfig.title}`
    : siteConfig.title;

  const fullUrl = `${siteConfig.url}${url}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>

        <meta name='canonical' content={fullUrl} />
        <meta name='author' content={siteConfig.author} />
        <meta
          name='description'
          content={description || siteConfig.description}
        />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content={`@${siteConfig.siteTwitter}`} />
        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:url' content={fullUrl} />

        <meta property='og:title' content={pageTitle} />
        <meta property='og:site_name' content={siteConfig.title} />
        <meta property='og:url' content={fullUrl} />
        <meta property='og:description' content={description} />
        <meta
          property='og:image'
          content={`${siteConfig.url}/apple-touch-icon.png`}
        />
      </Head>
      <GlobalStyles />

      <SkipLink />
      <PageContainer>
        <Header />
        <Row>
          <Spacer width={16} />
          <Main id='main-content'>{children}</Main>
          <Spacer width={16} />
        </Row>
        <FlexibleSpacer />
        <Footer />
      </PageContainer>
    </>
  );
};

PageTemplate.displayName = 'PageTemplate';

export default PageTemplate;
