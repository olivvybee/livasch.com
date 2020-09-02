import { styled } from './Theming';

const ScreenReaderOnly = styled('div')({
  border: 0,
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'inset(50%)',
  height: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: 1,
  whiteSpace: 'nowrap',
});

ScreenReaderOnly.displayName = 'ScreenReaderOnly';

export default ScreenReaderOnly;
