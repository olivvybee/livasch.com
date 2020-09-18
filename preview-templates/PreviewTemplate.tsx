import createEmotionCache from '@emotion/cache';
import { CacheProvider } from '@emotion/core';
import { useEffect } from 'react';

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

  useEffect(() => {
    const outerStylesheets = window.document.styleSheets;
    const innerStylesheet = document.styleSheets[0];

    // Number of stylesheets to ignore when copying into the iframe.
    // These are added by the Netlify CMS so will always appear after
    // the ones from Next.js because it loads asynchronously.
    const netlifyStylesheets = 5;

    for (
      let sheet = 0;
      sheet < outerStylesheets.length - netlifyStylesheets;
      sheet++
    ) {
      console.log(outerStylesheets[sheet]);
      const rulesToCopy = outerStylesheets[sheet].rules;
      for (let rule = 0; rule < rulesToCopy.length; rule++) {
        innerStylesheet.insertRule(
          rulesToCopy[rule].cssText,
          innerStylesheet.rules.length
        );
      }
    }
  }, []);

  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
};

export default PreviewTemplate;
