import React, { CSSProperties } from 'react';
import { styled } from './Theming';

interface FlexContainerProps {
  flexDirection?: CSSProperties['flexDirection'];
  gridGap?: number;
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
}

const FlexContainer = styled('div')<FlexContainerProps>(
  ({ flexDirection, gridGap, justifyContent, alignItems }) => {
    const marginProp =
      flexDirection === 'column' || flexDirection === 'column-reverse'
        ? 'marginBottom'
        : 'marginRight';

    return {
      display: 'flex',
      flexDirection,
      justifyContent,
      alignItems,

      '& > *': {
        [marginProp]: gridGap,
      },
    };
  }
);

FlexContainer.displayName = 'FlexContainer';

export const Row = styled(FlexContainer)();
Row.displayName = 'Row';
Row.defaultProps = {
  flexDirection: 'row',
};

export const Column = styled(FlexContainer)();
Column.displayName = 'Column';
Column.defaultProps = {
  flexDirection: 'column',
};
