import { GetStaticProps } from 'next';

interface IndexProps {
  title: string;
  description: string;
}

const Index = ({ title, description }: IndexProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
};
