import moment from 'moment';

import { Column } from './Layout';
import Link from './Link';

import styles from '../styles/PostHeader.module.scss';

interface PostHeaderProps {
  tag?: 'h1' | 'h2';
  title: string;
  date: string;
  url?: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  tag = 'h1',
  title,
  date,
  url,
}) => {
  const formattedDate = moment(date).format('LL');

  // const formattedTitle = tag === 'h2' ? <h2>{title}</h2> : <h1>{title}</h1>;

  const formattedTitle = !!url ? (
    <Link href='/[...slug]' as={url}>
      {title}
    </Link>
  ) : (
    title
  );

  return (
    <Column gridGap={6}>
      {tag === 'h2' ? <h2>{formattedTitle}</h2> : <h1>{formattedTitle}</h1>}
      <span className={styles.date}>{formattedDate}</span>
    </Column>
  );
};

PostHeader.displayName = 'PostHeader';

export default PostHeader;
