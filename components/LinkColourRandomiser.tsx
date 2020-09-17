import { useEffect } from 'react';

const COLOUR_KEYS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const pick = (list: string[]) => {
  const max = list.length;
  const chosenIndex = Math.floor(Math.random() * max);
  return list[chosenIndex];
};

const LinkColourRandomiser = () => {
  useEffect(() => {
    const mainColourKey = pick(COLOUR_KEYS);
    const hoverColourKey = pick(
      COLOUR_KEYS.filter((key) => key !== mainColourKey)
    );

    const styles = getComputedStyle(document.querySelector(':root'));
    const mainColour = styles.getPropertyValue(`--${mainColourKey}`);
    const hoverColour = styles.getPropertyValue(`--${hoverColourKey}`);

    const stylesheet = document.styleSheets[0];
    stylesheet.insertRule(
      `a { color: ${mainColour}; }`,
      stylesheet.cssRules.length
    );
    stylesheet.insertRule(
      `a:hover { color: ${hoverColour}; }`,
      stylesheet.cssRules.length
    );
  }, []);

  return null;
};

LinkColourRandomiser.displayName = 'LinkColourRandomiser';

export default LinkColourRandomiser;
