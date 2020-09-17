import React from 'react';

import Link from './Link';

import styles from '../styles/SkipLink.module.scss';

const SkipLink = () => (
  <div className={styles.wrapper}>
    <Link href='#main-content'>Skip to content →</Link>
  </div>
);

SkipLink.displayName = 'SkipLink';

export default SkipLink;
