import React from 'react';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PageTemplate from '../components/PageTemplate';

import styles from '../styles/Links.module.scss';

const LINKS = [
  {
    name: 'Blog',
    url: 'https://livasch.com',
    icon: 'fas-pen',
    colour: '#e7504b',
  },
  {
    name: 'Mastodon',
    url: 'https://tech.lgbt/@olivvybee',
    icon: 'fab-mastodon',
    colour: '#6364ff',
    verificationTag: true,
  },
  {
    name: 'Github',
    url: 'https://github.com/olivvybee',
    icon: 'fab-github',
    colour: '#24292e',
  },
  {
    name: 'Twitch',
    url: 'https://twitch.tv/olivvybee',
    icon: 'fab-twitch',
    colour: '#6441a4',
  },
  {
    name: 'Etsy store',
    url: 'https://olivvycraft.etsy.com',
    icon: 'fab-etsy',
    colour: '#f56400',
  },
  {
    name: 'Buy me a coffee',
    url: 'https://ko-fi.com/olivvybee',
    icon: 'fas-coffee',
    colour: '#ed6a65',
  },
];

const LinksPage = () => (
  <PageTemplate title="Links">
    <h1>Links</h1>
    <p>These are all the places you can find me online.</p>

    <ul className={styles.linkList}>
      {LINKS.map(({ name, icon, url }) => (
        <li key={name} className={styles.linkItem}>
          <a href={url}>
            <span className={styles.icon}>
              <FontAwesomeIcon
                icon={icon.split('-') as [IconPrefix, IconName]}
              />
            </span>
            {name}
          </a>
        </li>
      ))}
    </ul>
  </PageTemplate>
);

export default LinksPage;
