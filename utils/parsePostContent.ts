import matter from 'gray-matter';
import moment from 'moment';

export const parsePostContent = (content: any, slug?: string) => {
  const data = matter(content.default);

  let url = undefined;

  if (slug) {
    const datePortion = slug.split('-').slice(0, 3);
    const namePortion = slug.split('-').slice(3);
    url = `/${datePortion.join('/')}/${namePortion.join('-')}`;
  }

  return {
    title: data.data.title,
    date: moment(data.data.date).toISOString(),
    tags: data.data.tags || [],
    hero: data.data.hero || '',
    body: data.content,
    url,
  };
};
