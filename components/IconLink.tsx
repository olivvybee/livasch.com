import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { LinkProps } from 'next/link';

import Link from './Link';
import { Row, Spacer } from './Layout';

interface IconLinkProps extends LinkProps {
  icon: IconProp;
  gridGap?: number;
  flipped?: boolean;
}

const IconLink: React.FC<IconLinkProps> = ({
  children,
  icon,
  gridGap = 4,
  flipped,
  ...props
}) => (
  <Link {...props}>
    <Row alignItems='center' flexDirection={flipped ? 'row-reverse' : 'row'}>
      <FontAwesomeIcon role='presentation' icon={icon} />
      <Spacer width={gridGap} />
      <span>{children}</span>
    </Row>
  </Link>
);

IconLink.displayName = 'IconLink';

export default IconLink;
