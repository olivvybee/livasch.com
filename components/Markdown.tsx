import React from 'react';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';

import CodeBlock from './CodeBlock';

const Markdown: React.FC<ReactMarkdownProps> = ({ ...props }) => (
  <ReactMarkdown renderers={{ code: CodeBlock }} {...props} />
);

Markdown.displayName = 'Markdown';

export default Markdown;
