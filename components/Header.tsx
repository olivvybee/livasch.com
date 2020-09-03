import React from 'react';

import siteConfig from '../siteconfig.json';

import { styled } from './Theming';
import Link from './Link';
import { Row, FlexibleSpacer } from './Layout';

const HeaderWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.colours.backgroundAccent,
  padding: 16,
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
          <Link href='/'>
            <span css={{ fontSize: '2rem', fontWeight: 'bold' }}>
              {siteConfig.title}
            </span>
          </Link>
        </Row>

        <FlexibleSpacer />

        <Row gridGap={32}>
          <Link href='/[slug]' as='/about'>
            About
          </Link>
          <Link href='/projects'>Projects</Link>
          <Link href='/archive'>Archive</Link>
        </Row>
      </Row>
    </HeaderContent>
  </HeaderWrapper>
);

Header.displayName = 'Header';

export default Header;
