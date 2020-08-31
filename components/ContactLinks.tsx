import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

import { Column, Row, Spacer } from './Layout';
import { styled, useTheme } from './Theming';

interface ContactLink {
  name: string;
  url: string;
  icon: string;
  colour: string;
}

interface ContactLinksProps {
  links: ContactLink[];
}

const Ul = styled(Row)({
  listStyleType: 'none',
});

interface ContactLinkElementProps {
  hoverColour: string;
}

const ContactLinkElement = styled('a')<ContactLinkElementProps>(
  ({ theme, hoverColour }) => ({
    color: theme.colours.text,

    svg: {
      transition: 'color 0.2s',
    },

    ':hover': {
      color: theme.colours.text,

      svg: {
        color: hoverColour,
      },
    },
  })
);

const ContactLinks: React.FC<ContactLinksProps> = ({ links }) => (
  <Column gridGap={24}>
    <h3>Places to find me</h3>
    <Ul role='list' gridGap={48} flexWrap='wrap' wrapSpacing={8}>
      {links.map(({ name, url, icon, colour }) => (
        <li key={name}>
          <ContactLinkElement href={url} target='_blank' hoverColour={colour}>
            <Column
              alignItems='center'
              css={{ maxWidth: 48, textAlign: 'center' }}>
              <FontAwesomeIcon
                icon={icon.split('-') as [IconPrefix, IconName]}
                size='3x'
              />
              <Spacer height={8} />
              {name}
            </Column>
          </ContactLinkElement>
        </li>
      ))}
    </Ul>
  </Column>
);

ContactLinks.displayName = 'ContactLinks';

export default ContactLinks;
