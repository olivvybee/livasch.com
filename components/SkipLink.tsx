import React from 'react';

import { styled } from './Theming';

const SkipLinkWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: -100,
  left: 8,
  borderRadius: 8,
  padding: 12,
  backgroundColor: theme.colours.background,
  border: `1px solid ${theme.colours.separator}`,
  transition: 'top 0.25s',

  ':focus-within': {
    top: 8,
  },

  a: {
    color: theme.colours.text,
  },
}));

const SkipLink = () => (
  <SkipLinkWrapper>
    <a href='#main-content'>Skip to content</a>
  </SkipLinkWrapper>
);

SkipLink.displayName = 'SkipLink';

export default SkipLink;
