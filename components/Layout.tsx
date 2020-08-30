import React, { CSSProperties } from 'react';
import { styled } from './Theming';

interface FlexContainerProps {
  flexDirection?: CSSProperties['flexDirection'];
  gridGap?: number;
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  flexWrap?: CSSProperties['flexWrap'];
  wrapSpacing?: number;
}

const FlexContainer = styled('div')<FlexContainerProps>(
  ({
    flexDirection,
    gridGap,
    justifyContent,
    alignItems,
    flexWrap,
    wrapSpacing,
  }) => {
    const gridGapProp =
      flexDirection === 'column' || flexDirection === 'column-reverse'
        ? { marginBottom: gridGap }
        : { marginRight: gridGap };

    return {
      display: 'flex',
      flexDirection,
      justifyContent,
      alignItems,
      flexWrap,
      marginBottom: !!wrapSpacing ? -wrapSpacing : undefined,

      '& > *': {
        marginBottom: wrapSpacing,
      },
      '& > *:not(:last-child)': {
        ...gridGapProp,
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

interface SpacerProps {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

export const Spacer = styled('div')<SpacerProps>(({ width, height }) => ({
  width,
  height,
}));
Spacer.displayName = 'Spacer';

export const FlexibleSpacer = styled('div')({
  flex: 1,
});
FlexibleSpacer.displayName = 'FlexibleSpacer';
