import { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { ThemeProvider } from '../components/Theming';
import LinkColoursContextProvider from '../components/LinkColours';

library.add(fas, fab);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LinkColoursContextProvider>
        <Component {...pageProps} />
      </LinkColoursContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
