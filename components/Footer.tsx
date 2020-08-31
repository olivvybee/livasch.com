import React from 'react';

import siteConfig from '../siteconfig.json';

import { styled } from './Theming';
import Link from './Link';
import { Row, FlexibleSpacer, Spacer } from './Layout';
import BackToTopButton from './BackToTopButton';
import IconLink from './IconLink';

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
        <Row gridGap={16} alignItems='center' flexWrap='wrap' wrapSpacing={8}>
          <span>
            © {siteConfig.copyrightStart}–{year}{' '}
            <Link href='/about'>{siteConfig.author}</Link>
          </span>

          <FlexibleSpacer />

          <Row gridGap={24}>
            <IconLink href='/rss' icon='rss'>
              RSS
            </IconLink>

            <IconLink
              href={`https://twitter.com/${siteConfig.siteTwitter}`}
              icon={['fab', 'twitter']}>
              @{siteConfig.siteTwitter}
            </IconLink>

            <BackToTopButton />
          </Row>
        </Row>
      </FooterContent>
    </FooterWrapper>
  );
};

Footer.displayName = 'Footer';

export default Footer;
