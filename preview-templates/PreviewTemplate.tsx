import createEmotionCache from '@emotion/cache';
import { CacheProvider } from '@emotion/core';

import { ThemeProvider } from '../components/Theming';
import LinkColoursContextProvider from '../components/LinkColours';

interface PreviewTemplateProps {
  window: Window;
  document: Document;
}

const PreviewTemplate: React.FC<PreviewTemplateProps> = ({
  children,
  document,
}) => {
  const emotionCache = createEmotionCache({
    container: document.head,
    key: 'preview-css',
  });

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <LinkColoursContextProvider>{children}</LinkColoursContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default PreviewTemplate;
