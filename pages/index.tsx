import Head from 'next/head';

import PageTemplate from '../components/PageTemplate';
import { Row } from '../components/Layout';
import { useTheme } from '../components/Theming';

const Index = () => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
      </Head>

      <PageTemplate>
        <Row gridGap={16}>
          {Object.entries(theme.colours).map(([name, colour]) => (
            <div
              key={name}
              style={{
                width: 50,
                height: 50,
                backgroundColor: colour,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.colours.background,
              }}>
              A
            </div>
          ))}
        </Row>
      </PageTemplate>

      <script src='/scripts/netlify-identity.js'></script>
    </>
  );
};

export default Index;
