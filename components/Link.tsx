import React, { CSSProperties } from 'react';
import NextLink, { LinkProps } from 'next/link';

const Link: React.FC<LinkProps> = ({ children, ...props }) => (
  <NextLink {...props}>
    <a>{children}</a>
  </NextLink>
);

Link.displayName = 'Link';

export default Link;
