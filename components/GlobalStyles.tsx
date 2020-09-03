import { Global, css } from '@emotion/core';
import { useTheme } from './Theming';
import { useContext, CSSProperties } from 'react';
import { linkColoursContext } from './LinkColours';

const GlobalStyles = () => {
  const theme = useTheme();
  const { colour, hoverColour } = useContext(linkColoursContext);

  const rainbowGradient = `
    linear-gradient(
      90deg,
      ${theme.colours.red},
      ${theme.colours.orange},
      ${theme.colours.yellow},
      ${theme.colours.green},
      ${theme.colours.blue},
      ${theme.colours.purple}
    )
  `;

  const rainbowText: CSSProperties = {
    background: rainbowGradient,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

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
      ':hover:not(.no-rainbow)': {
        ...rainbowText,
      },
    },
    button: {
      color: colour,
      textDecoration: 'none',
      transition: 'color 0.2s',
      background: 'none',
      border: 'none',
      fontSize: 'inherit',
      cursor: 'pointer',
      textAlign: 'start',
      display: 'inline',
      ':hover': {
        color: hoverColour,
        textDecoration: 'underline',
        ...rainbowText,
      },
    },

    main: {
      fontSize: '1.3rem',
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
        display: 'block',
        margin: '0 auto',
        maxWidth: '100%',
      },
      hr: {
        marginBottom: '1.5rem',
        border: 'none',
        height: 1,
        background: rainbowGradient,
      },
    },
  });

  return <Global styles={styles} />;
};

GlobalStyles.displayName = 'GlobalStyles';

export default GlobalStyles;
