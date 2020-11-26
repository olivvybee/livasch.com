import React from 'react';
import { ReactMarkdownProps } from 'react-markdown';
import ReactMarkdown from 'react-markdown/with-html';

import CodeBlock from './CodeBlock';

const Markdown: React.FC<ReactMarkdownProps> = ({ ...props }) => (
  <ReactMarkdown
    renderers={{ code: CodeBlock }}
    {...props}
    escapeHtml={false}
  />
);

Markdown.displayName = 'Markdown';

export default Markdown;
