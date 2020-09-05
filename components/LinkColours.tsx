import React, { createContext, useState, useEffect } from 'react';
import { useTheme } from './Theming';

const POSSIBLE_COLOURS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

const pick = (list: string[]) => {
  const max = list.length;
  const chosenIndex = Math.floor(Math.random() * max);
  return list[chosenIndex];
};

interface LinkColoursContextShape {
  colour: string;
  hoverColour: string;
}

export const linkColoursContext = createContext<LinkColoursContextShape>({
  colour: 'white',
  hoverColour: 'white',
});
linkColoursContext.displayName = 'linkColoursContext';

const LinkColoursContextProvider: React.FC = ({ children }) => {
  const theme = useTheme();

  const [values, setValues] = useState<LinkColoursContextShape>({
    colour: theme.colours.purple,
    hoverColour: theme.colours.purple,
  });

  useEffect(() => {
    const colours = POSSIBLE_COLOURS.map((key) => theme.colours[key]);

    const colour = pick(colours);
    const hoverColour = pick(colours.filter((key) => key !== colour));

    setValues({ colour, hoverColour });
  }, [setValues]);

  return (
    <linkColoursContext.Provider value={values}>
      {children}
    </linkColoursContext.Provider>
  );
};

LinkColoursContextProvider.displayName = 'LinkColoursContextProvider';

export default LinkColoursContextProvider;
