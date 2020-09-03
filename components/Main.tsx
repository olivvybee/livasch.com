import { styled } from './Theming';

const Main = styled('main')(({ theme }) => ({
  width: '100%',
  maxWidth: theme.maxContentWidth,
  margin: '0 auto',
  padding: '32px 0',
}));

Main.displayName = 'Main';

export default Main;
