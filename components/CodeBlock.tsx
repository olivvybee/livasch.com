import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Column } from './Layout';

const LANGUAGE_MAP = {
  js: 'Javascript',
  javascript: 'Javascript',
  jsx: 'JSX',
  ts: 'Typescript',
  tsx: 'TSX',
  md: 'Markdown',
  mdx: 'MDX',
  py: 'Python',
  python: 'Python',
  objc: 'Objective-C',
  objectivec: 'Objective-C',
};

interface CodeBlockProps {
  value: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ value, language }) => (
  <Column alignItems='flex-start'>
    {language && (
      <span className='language-tag'>{LANGUAGE_MAP[language] || language}</span>
    )}
    <SyntaxHighlighter
      className='syntax-highlight'
      language={language}
      useInlineStyles={false}
      codeTagProps={{}}>
      {value}
    </SyntaxHighlighter>
  </Column>
);

CodeBlock.displayName = 'CodeBlock';

export default CodeBlock;
