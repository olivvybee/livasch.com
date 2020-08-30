import { AppProps } from 'next/app';

import { ThemeProvider } from '../components/Theming';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
