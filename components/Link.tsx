import React, { CSSProperties } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  const router = useRouter();

  // In case the link is being rendered outside the context of the Next.js router
  // (e.g. in Netlify CMS previews), only use a NextLink if the router exists.
  if (router) {
    return (
      <NextLink {...props}>
        <a>{children}</a>
      </NextLink>
    );
  }

  const convertedProps = props.as ? { ...props, href: props.as } : props;
  return <a {...(convertedProps as any)}>{children}</a>;
};

Link.displayName = 'Link';

export default Link;
