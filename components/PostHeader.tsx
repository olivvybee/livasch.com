import moment from 'moment';

import { useTheme } from './Theming';
import { Column } from './Layout';
import Link from './Link';

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
  const theme = useTheme();

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
      <span css={{ color: theme.colours.textSecondary, fontSize: '1rem' }}>
        {formattedDate}
      </span>
    </Column>
  );
};

PostHeader.displayName = 'PostHeader';

export default PostHeader;
