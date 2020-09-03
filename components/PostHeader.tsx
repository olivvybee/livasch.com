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

  const formattedTitle = tag === 'h2' ? <h2>{title}</h2> : <h1>{title}</h1>;

  return (
    <Column gridGap={4}>
      {!!url ? (
        <Link href='/[...slug]' as={url}>
          {formattedTitle}
        </Link>
      ) : (
        formattedTitle
      )}
      <span css={{ color: theme.colours.textSecondary }}>{formattedDate}</span>
    </Column>
  );
};

PostHeader.displayName = 'PostHeader';

export default PostHeader;
