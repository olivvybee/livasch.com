import { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import moment from 'moment';
import 'moment/locale/en-gb';

import '../styles/global.scss';

import { ThemeProvider } from '../components/Theming';
import LinkColoursContextProvider from '../components/LinkColours';

library.add(fas, fab);

moment.locale('en-gb');

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
