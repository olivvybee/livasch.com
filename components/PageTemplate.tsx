import React from 'react';
import Head from 'next/head';

import siteConfig from '../siteconfig.json';

import Header from './Header';
import Footer from './Footer';
import { FlexibleSpacer, Row, Spacer } from './Layout';
import SkipLink from './SkipLink';

import styles from '../styles/PageTemplate.module.scss';

interface PageTemplateProps {
  title?: string;
  description?: string;
  url?: string;
  heroImage?: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
  title,
  description,
  heroImage,
  url = '',
}) => {
  const pageTitle = !!title
    ? `${title} – ${siteConfig.title}`
    : siteConfig.title;

  const fullUrl = `${siteConfig.url}${url}`;
  const siteImageUrl = `${siteConfig.url}/apple-touch-icon.png`;
  const heroImageUrl = heroImage ? `${siteConfig.url}${heroImage}` : undefined;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>

        <meta name="canonical" content={fullUrl} />
        <meta name="author" content={siteConfig.author} />
        <meta
          name="description"
          content={description || siteConfig.description}
        />

        <meta
          name="twitter:card"
          content={heroImageUrl ? 'summary_large_image' : 'summary'}
        />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={fullUrl} />
        <meta name="twitter:image" content={heroImageUrl || siteImageUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content={siteConfig.title} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={heroImageUrl || siteImageUrl} />
      </Head>

      <SkipLink />
      <div className={styles.container}>
        <Header />
        <Row>
          <Spacer width={16} />
          <main id="main-content" className="main-content">
            {children}
          </main>
          <Spacer width={16} />
        </Row>
        <FlexibleSpacer />
        <Footer />
      </div>
    </>
  );
};

PageTemplate.displayName = 'PageTemplate';

export default PageTemplate;
