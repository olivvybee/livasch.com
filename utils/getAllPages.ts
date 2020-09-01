import { parsePageContent } from './parsePageContent';

export const getAllPages = () => {
  return ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);

      const content = values[index] as any;

      const page = parsePageContent(content, slug);

      return {
        ...page,
      };
    });

    return data;
  })(require.context('../pageContent', true, /\.md$/));
};
