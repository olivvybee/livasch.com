import React from 'react';

import siteConfig from '../siteconfig.json';

import { styled } from './Theming';
import Link from './Link';
import { Row, FlexibleSpacer } from './Layout';

const HeaderWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.colours.backgroundAccent,
  padding: 16,

  a: {
    textDecoration: 'none',
    color: theme.colours.text,
  },
  'a:hover': {
    textDecoration: 'underline',
  },
}));
HeaderWrapper.displayName = 'HeaderWrapper';

const HeaderContent = styled('header')(({ theme }) => ({
  maxWidth: theme.maxContentWidth,
  margin: '0 auto',
}));
HeaderContent.displayName = 'HeaderContent';

const Header = () => (
  <HeaderWrapper>
    <HeaderContent>
      <Row gridGap={16} alignItems='center' flexWrap='wrap' wrapSpacing={16}>
        <Link href='/'>
          <Row gridGap={12} alignItems='center'>
            <div
              style={{
                color: 'black',
                backgroundColor: 'aquamarine',
                height: 32,
                width: 32,
                fontSize: 12,
              }}>
              Logo
            </div>
            <h1>{siteConfig.title}</h1>
          </Row>
        </Link>

        <FlexibleSpacer />

        <Row gridGap={24}>
          <Link href='/about'>About</Link>
          <Link href='/projects'>Projects</Link>
          <Link href='/archive'>Archive</Link>
        </Row>
      </Row>
    </HeaderContent>
  </HeaderWrapper>
);

Header.displayName = 'Header';

export default Header;
