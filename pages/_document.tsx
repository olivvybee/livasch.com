import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link rel='apple-touch-icon' href='apple-touch-icon.png' />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
