import { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import moment from 'moment';
import 'moment/locale/en-gb';

import '../styles/GlobalStyles.scss';
import '../styles/SyntaxHighlighting.scss';
import '../styles/PostElements.scss';

import LinkColourRandomiser from '../components/LinkColourRandomiser';

library.add(fas, fab);

moment.locale('en-gb');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LinkColourRandomiser />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
