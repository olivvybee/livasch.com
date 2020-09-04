import { Global, css } from '@emotion/core';
import { useTheme } from './Theming';
import { useContext, CSSProperties } from 'react';
import { linkColoursContext } from './LinkColours';

const GlobalStyles = () => {
  const theme = useTheme();
  const { colour, hoverColour } = useContext(linkColoursContext);

  const rainbowGradientSoft = `
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

  const rainbowGradient = `
    linear-gradient(
      90deg,
      ${theme.colours.red} 0%,
      ${theme.colours.red} 16.67%,
      ${theme.colours.orange} 16.67%,
      ${theme.colours.orange} 33.33%,
      ${theme.colours.yellow} 33.33%,
      ${theme.colours.yellow} 50%,
      ${theme.colours.green} 50%,
      ${theme.colours.green} 66.67%,
      ${theme.colours.blue} 66.67%,
      ${theme.colours.blue} 83.34%,
      ${theme.colours.purple} 83.34%,
      ${theme.colours.purple} 100%
    )
  `;

  const rainbowText: CSSProperties = {
    background: rainbowGradientSoft,
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
        code: {
          fontFamily: theme.fontFamilyCode,
          fontSize: '1.2rem',
          backgroundColor: theme.colours.backgroundHighlight,
          padding: 2,
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
      blockquote: {
        background: rainbowGradient.replace('90deg', '180deg'),
        paddingLeft: 8,
        marginBottom: '1.5rem',
        p: {
          background: theme.colours.backgroundHighlight,
          padding: 16,
          paddingLeft: 24,
        },
      },
    },
  });

  return <Global styles={styles} />;
};

GlobalStyles.displayName = 'GlobalStyles';

export default GlobalStyles;
