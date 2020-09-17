import styles from '../styles/ScreenReaderOnly.module.scss';

const ScreenReaderOnly: React.FC = ({ children }) => (
  <div className={styles.sr}>{children}</div>
);

ScreenReaderOnly.displayName = 'ScreenReaderOnly';

export default ScreenReaderOnly;
