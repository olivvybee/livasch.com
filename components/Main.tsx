import { styled } from './Theming';

const Main = styled('main')(({ theme }) => ({
  width: '100%',
  maxWidth: theme.maxContentWidth,
  margin: '0 auto',
}));

Main.displayName = 'Main';

export default Main;
