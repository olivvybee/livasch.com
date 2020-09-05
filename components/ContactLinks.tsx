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

const Ul = styled('div')({
  listStyleType: 'none',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))',
  gridColumnGap: 32,
  gridRowGap: 32,
});
Ul.displayName = 'Ul';

interface ContactLinkAnchorProps {
  hoverColour: string;
}

const ContactLinkAnchor = styled('a')<ContactLinkAnchorProps>(
  ({ theme, hoverColour }) => ({
    color: theme.colours.text,
    fontSize: '1rem',

    ':hover': {
      color: theme.colours.text,
      textDecoration: 'none',

      span: {
        border: `2px solid ${hoverColour}`,
        backgroundColor: hoverColour,
      },
    },
  })
);
ContactLinkAnchor.displayName = 'ContactLinkAnchor';

const ContactLinkIcon = styled('span')(({ theme }) => ({
  fontSize: '1rem',
  width: 64,
  height: 64,
  borderRadius: '50%',
  border: `2px solid ${theme.colours.text}`,
  color: theme.colours.text,
  backgroundColor: theme.colours.background,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'border-color 0.2s, background-color 0.2s',
}));
ContactLinkIcon.displayName = 'ContactLinkIcon';

const ContactLinks: React.FC<ContactLinksProps> = ({ links }) => (
  <Column gridGap={24}>
    <h3>Places to find me</h3>
    <Ul role='list'>
      {links.map(({ name, url, icon, colour }) => (
        <li key={name}>
          <ContactLinkAnchor
            href={url}
            target='_blank'
            className='no-rainbow'
            hoverColour={colour}>
            <Column
              alignItems='center'
              css={{ width: 96, textAlign: 'center' }}>
              <ContactLinkIcon>
                <FontAwesomeIcon
                  icon={icon.split('-') as [IconPrefix, IconName]}
                  size='2x'
                />
              </ContactLinkIcon>
              <Spacer height={8} />
              {name}
            </Column>
          </ContactLinkAnchor>
        </li>
      ))}
    </Ul>
  </Column>
);

ContactLinks.displayName = 'ContactLinks';

export default ContactLinks;
