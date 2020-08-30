import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import siteConfig from '../siteconfig.json';

import { styled } from './Theming';
import Link from './Link';
import { Row, FlexibleSpacer, Spacer } from './Layout';
import BackToTopButton from './BackToTopButton';

const FooterWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.colours.backgroundAccent,
  padding: 16,
  a: {
    color: theme.colours.text,
  },
  'a:hover': {
    textDecoration: 'none',
  },
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
        <Row gridGap={16} alignItems='center' flexWrap='wrap' wrapSpacing={8}>
          <span>
            © {siteConfig.copyrightStart}–{year}{' '}
            <Link href='/about'>{siteConfig.author}</Link>
          </span>

          <FlexibleSpacer />

          <Row gridGap={24}>
            <Link href='/rss'>
              <Row alignItems='center'>
                <FontAwesomeIcon icon={faRss} />
                <Spacer width={4} />
                RSS
              </Row>
            </Link>

            <a href='https://twitter.com/bearhat_posts'>
              <Row alignItems='center'>
                <FontAwesomeIcon icon={faTwitter} />
                <Spacer width={4} />
                @bearhat_posts
              </Row>
            </a>

            <BackToTopButton />
          </Row>
        </Row>
      </FooterContent>
    </FooterWrapper>
  );
};

Footer.displayName = 'Footer';

export default Footer;
