import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';

import { Column, Row, Spacer } from './Layout';

import styles from '../styles/ContactLinks.module.scss';

interface ContactLink {
  name: string;
  url: string;
  icon: string;
  colour: string;
}

interface ContactLinksProps {
  links: ContactLink[];
}

const ContactLinks: React.FC<ContactLinksProps> = ({ links }) => (
  <Column gridGap={24}>
    <h3>Places to find me</h3>
    <ul role='list' className={styles.list}>
      {links.map(({ name, url, icon, colour }) => (
        <li key={name}>
          <a href={url} target='_blank' className={styles.link}>
            <Column alignItems='center' css={{ textAlign: 'center' }}>
              <span className={styles.icon}>
                <FontAwesomeIcon
                  icon={icon.split('-') as [IconPrefix, IconName]}
                  size='2x'
                />
              </span>
              <Spacer height={8} />
              {name}
            </Column>
          </a>
        </li>
      ))}
    </ul>
  </Column>
);

ContactLinks.displayName = 'ContactLinks';

export default ContactLinks;
