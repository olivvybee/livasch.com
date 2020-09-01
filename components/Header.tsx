import React from 'react';

import siteConfig from '../siteconfig.json';

import { styled } from './Theming';
import Link from './Link';
import { Row, FlexibleSpacer } from './Layout';
import IconLink from './IconLink';

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
          <IconLink href='/about' icon='user' gridGap={8}>
            About
          </IconLink>
          <IconLink href='/projects' icon='code' gridGap={8}>
            Projects
          </IconLink>
          <IconLink href='/archive' icon='list-ul' gridGap={8}>
            Archive
          </IconLink>
        </Row>
      </Row>
    </HeaderContent>
  </HeaderWrapper>
);

Header.displayName = 'Header';

export default Header;
