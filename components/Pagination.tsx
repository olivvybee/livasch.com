import React from 'react';
import { Row, FlexibleSpacer, Column } from './Layout';
import IconLink from './IconLink';
import { useTheme } from './Theming';

interface PaginationProps {
  newerPostsPageNumber?: number;
  olderPostsPageNumber?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  newerPostsPageNumber,
  olderPostsPageNumber,
}) => {
  const theme = useTheme();

  return (
    <Row
      css={{
        width: '100%',
        borderTop: `1px solid ${theme.colours.separator}`,
        paddingTop: 48,
        paddingBottom: 16,
      }}>
      {!!newerPostsPageNumber && (
        <IconLink
          icon='arrow-left'
          gridGap={8}
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
          gridGap={8}
          href='/page/[pageNumber]'
          as={`/page/${olderPostsPageNumber}`}>
          Older posts
        </IconLink>
      )}
    </Row>
  );
};

Pagination.displayName = 'Pagination';

export default Pagination;
