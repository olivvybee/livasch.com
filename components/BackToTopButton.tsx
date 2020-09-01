import React, { useContext } from 'react';
import { useMedia } from 'react-media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { styled } from './Theming';
import { Row } from './Layout';
import { linkColoursContext } from './LinkColours';

interface BackToTopStyledButtonProps {
  color: string;
  hoverColor: string;
}

const BackToTopStyledButton = styled('button')<BackToTopStyledButtonProps>(
  ({ color, hoverColor }) => ({
    background: 'none',
    color,
    border: 'none',
    fontSize: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.2s',
    textAlign: 'start',
    ':hover': {
      color: hoverColor,
      textDecoration: 'underline',
    },
  })
);
BackToTopStyledButton.displayName = 'BackToTopStyledButton';

const BackToTopButton = () => {
  const useReducedMotion = useMedia({
    query: '(prefers-reduced-motion: reduce)',
  });

  const { colour, hoverColour } = useContext(linkColoursContext);

  const onClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: useReducedMotion ? undefined : 'smooth',
    });
  };

  return (
    <BackToTopStyledButton
      type='button'
      onClick={onClick}
      color={colour}
      hoverColor={hoverColour}>
      <Row gridGap={4} alignItems='flex-start'>
        <FontAwesomeIcon icon={faArrowUp} aria-hidden={true} />
        <span>Back to top</span>
      </Row>
    </BackToTopStyledButton>
  );
};

BackToTopButton.displayName = 'BackToTopButton';

export default BackToTopButton;
