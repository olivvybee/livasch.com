import { AppProps } from 'next/app';

import { ThemeProvider } from '../components/Theming';
import LinkColoursContextProvider from '../components/LinkColours';

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
