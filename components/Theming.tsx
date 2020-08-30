import emotionStyled, { CreateStyled } from '@emotion/styled';
import {
  ThemeProvider as EmotionThemeProvider,
  useTheme as emotionUseTheme,
} from 'emotion-theming';

import theme from '../theme.json';

export type Theme = typeof theme;

export const styled = emotionStyled as CreateStyled<Theme>;

export const useTheme = emotionUseTheme as () => Theme;

export const ThemeProvider: React.FC = ({ children }) => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);
ThemeProvider.displayName = 'ThemeProvider';
