import createEmotionCache from '@emotion/cache';
import { CacheProvider } from '@emotion/core';

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

  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
};

export default PreviewTemplate;
