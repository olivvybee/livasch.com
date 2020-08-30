import React from 'react';
import { useMedia } from 'react-media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { styled } from './Theming';
import { Row } from './Layout';

const BackToTopStyledButton = styled('button')(({ theme }) => ({
  background: 'none',
  border: 'none',
  fontSize: 'inherit',
  color: theme.colours.text,
  cursor: 'pointer',
  textDecoration: 'underline',
  ':hover': {
    textDecoration: 'none',
  },
}));
BackToTopStyledButton.displayName = 'BackToTopStyledButton';

const BackToTopButton = () => {
  const useReducedMotion = useMedia({
    query: '(prefers-reduced-motion: reduce)',
  });

  const onClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: useReducedMotion ? undefined : 'smooth',
    });
  };

  return (
    <BackToTopStyledButton type='button' onClick={onClick}>
      <Row gridGap={4} alignItems='center'>
        <FontAwesomeIcon icon={faArrowUp} aria-hidden={true} />
        <span>Back to top</span>
      </Row>
    </BackToTopStyledButton>
  );
};

BackToTopButton.displayName = 'BackToTopButton';

export default BackToTopButton;
