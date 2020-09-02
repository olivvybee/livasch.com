import React from 'react';
import { Row, FlexibleSpacer } from './Layout';
import IconLink from './IconLink';

interface PaginationProps {
  newerPostsPageNumber?: number;
  olderPostsPageNumber?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  newerPostsPageNumber,
  olderPostsPageNumber,
}) => (
  <Row css={{ width: '100%' }}>
    {!!newerPostsPageNumber && (
      <IconLink
        icon='arrow-left'
        href='/page/[pageNumber]'
        as={`/page/${newerPostsPageNumber}`}>
        Newer posts
      </IconLink>
    )}

    <FlexibleSpacer />

    {!!olderPostsPageNumber && (
      <IconLink
        flipped={true}
        icon='arrow-right'
        href='/page/[pageNumber]'
        as={`/page/${olderPostsPageNumber}`}>
        Older posts
      </IconLink>
    )}
  </Row>
);

Pagination.displayName = 'Pagination';

export default Pagination;
