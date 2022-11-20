import React from 'react';

import siteConfig from '../siteconfig.json';

import Link from './Link';
import { Row } from './Layout';
import BackToTopButton from './BackToTopButton';

import styles from '../styles/Footer.module.scss';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <div className={styles.wrapper}>
      <footer className={styles.content}>
        <Row
          gridGap={24}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          wrapSpacing={8}
        >
          <span>
            © {siteConfig.copyrightStart}–{year}{' '}
            <Link href="/[slug]" as="/about">
              {siteConfig.author}
            </Link>
          </span>

          <Row gridGap={24}>
            <Link href="/atom.xml">RSS</Link>

            <Link href={`https://twitter.com/${siteConfig.siteTwitter}`}>
              @{siteConfig.siteTwitter}
            </Link>
          </Row>

          <BackToTopButton />
        </Row>
        <a
          className={styles.hiddenLink}
          href="https://tech.lgbt/@olivvybee"
          rel="me"
        >
          Mastodon
        </a>
      </footer>
    </div>
  );
};

Footer.displayName = 'Footer';

export default Footer;
