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
Ul.displayName = 'Ul';

const ContactLinkAnchor = styled('a')(({ theme }) => ({
  color: theme.colours.text,

  ':hover': {
    color: theme.colours.text,
    textDecoration: 'none',
  },
}));
ContactLinkAnchor.displayName = 'ContactLinkAnchor';

interface ContactLinkIconProps {
  hoverColour: string;
}

const ContactLinkIcon = styled('div')<ContactLinkIconProps>(
  ({ theme, hoverColour }) => ({
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
    ':hover': {
      border: `2px solid ${hoverColour}`,
      backgroundColor: hoverColour,
    },
  })
);
ContactLinkIcon.displayName = 'ContactLinkIcon';

const ContactLinks: React.FC<ContactLinksProps> = ({ links }) => (
  <Column gridGap={24}>
    <h3>Places to find me</h3>
    <Ul role='list' gridGap={32} flexWrap='wrap' wrapSpacing={8}>
      {links.map(({ name, url, icon, colour }) => (
        <li key={name}>
          <ContactLinkAnchor href={url} target='_blank'>
            <Column
              alignItems='center'
              css={{ maxWidth: 64, textAlign: 'center' }}>
              <ContactLinkIcon hoverColour={colour}>
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
