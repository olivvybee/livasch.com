import PageTemplate from '../components/PageTemplate';
import Link from '../components/Link';

const Custom404: React.FC = () => (
  <PageTemplate title='Not found'>
    <h1>Not found</h1>
    <p>That page couldn't be found.</p>
    <p>
      Go back to the <Link href='/'>homepage</Link>, or visit the{' '}
      <Link href='/archive'>archive</Link> for a list of all posts.
    </p>
  </PageTemplate>
);

export default Custom404;
