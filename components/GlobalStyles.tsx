import { Global, css } from '@emotion/core';
import { useTheme } from './Theming';
import { useContext } from 'react';
import { linkColoursContext } from './LinkColours';

const GlobalStyles = () => {
  const theme = useTheme();
  const { colour, hoverColour } = useContext(linkColoursContext);

  const styles = css({
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    html: {
      backgroundColor: theme.colours.background,
    },
    body: {
      backgroundColor: theme.colours.background,
      color: theme.colours.text,
      fontFamily: theme.fontFamily,
    },
    a: {
      color: colour,
      textDecoration: 'none',
      transition: 'color 0.2s',
    },
    'a:hover': {
      color: hoverColour,
      textDecoration: 'underline',
    },

    main: {
      a: {
        fontSize: '1.3rem',
      },
      p: {
        fontSize: '1.3rem',
        lineHeight: 1.4,
        ':not(:last-of-type)': {
          marginBottom: '1.5rem',
        },
      },
      h1: {
        fontSize: '2.5rem',
      },
      h2: {
        fontSize: '2rem',
      },
      img: {
        maxWidth: '100%',
      },
    },
  });

  return <Global styles={styles} />;
};

GlobalStyles.displayName = 'GlobalStyles';

export default GlobalStyles;
