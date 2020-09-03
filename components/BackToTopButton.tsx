import React from 'react';
import { useMedia } from 'react-media';

const BackToTopButton = () => {
  const useReducedMotion = useMedia({
    query: '(prefers-reduced-motion: reduce)',
  });

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: useReducedMotion ? undefined : 'smooth',
    });
  };

  return (
    <a href='#' onClick={onClick}>
      Back to top
    </a>
  );
};

BackToTopButton.displayName = 'BackToTopButton';

export default BackToTopButton;
