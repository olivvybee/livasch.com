import React from 'react';

import { styled } from './Theming';
import IconLink from './IconLink';

const SkipLinkWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: -100,
  left: 8,
  borderRadius: 8,
  padding: 12,
  backgroundColor: theme.colours.background,
  border: `1px solid ${theme.colours.separator}`,

  '@media not all and (prefers-reduced-motion: reduce)': {
    transition: 'top 0.25s',
  },

  ':focus-within': {
    top: 8,
  },

  a: {
    color: theme.colours.text,
  },
}));

const SkipLink = () => (
  <SkipLinkWrapper>
    <IconLink href='#main-content' icon='angle-double-down' gridGap={8}>
      Skip to content
    </IconLink>
  </SkipLinkWrapper>
);

SkipLink.displayName = 'SkipLink';

export default SkipLink;
