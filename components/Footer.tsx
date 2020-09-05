import React from 'react';

import siteConfig from '../siteconfig.json';

import { styled } from './Theming';
import Link from './Link';
import { Row } from './Layout';
import BackToTopButton from './BackToTopButton';

const FooterWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.colours.backgroundAccent,
  padding: 16,
}));
FooterWrapper.displayName = 'FooterWrapper';

const FooterContent = styled('footer')(({ theme }) => ({
  maxWidth: theme.maxContentWidth,
  margin: '0 auto',
}));
FooterContent.displayName = 'FooterContent';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <Row
          gridGap={24}
          justifyContent='space-between'
          alignItems='center'
          flexWrap='wrap'
          wrapSpacing={8}>
          <span>
            © {siteConfig.copyrightStart}–{year}{' '}
            <Link href='/[slug]' as='/about'>
              {siteConfig.author}
            </Link>
          </span>

          <Row gridGap={24}>
            <Link href='/atom.xml'>RSS</Link>

            <Link href={`https://twitter.com/${siteConfig.siteTwitter}`}>
              @{siteConfig.siteTwitter}
            </Link>
          </Row>

          <BackToTopButton />
        </Row>
      </FooterContent>
    </FooterWrapper>
  );
};

Footer.displayName = 'Footer';

export default Footer;
