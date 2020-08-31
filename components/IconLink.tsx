import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { LinkProps } from 'next/link';

import Link from './Link';
import { Row } from './Layout';

interface IconLinkProps extends LinkProps {
  icon: IconProp;
  gridGap?: number;
}

const IconLink: React.FC<IconLinkProps> = ({
  children,
  icon,
  gridGap = 4,
  ...props
}) => (
  <Link {...props}>
    <Row gridGap={gridGap} alignItems='center'>
      <FontAwesomeIcon role='presentation' icon={icon} />
      <span>{children}</span>
    </Row>
  </Link>
);

IconLink.displayName = 'IconLink';

export default IconLink;
