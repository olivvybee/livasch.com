import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { styled, useTheme } from './Theming';
import { Column } from './Layout';

const Pre = styled('pre')(({ theme }) => ({
  backgroundColor: theme.colours.backgroundHighlight,
  padding: 16,
  overflowX: 'auto',
  width: '100%',
  marginBottom: '1rem',
}));

const Code = styled('code')(({ theme }) => ({
  color: theme.colours.text,
  fontFamily: theme.fontFamilyCode,
  whiteSpace: 'inherit',
  background: 'none',
  textAlign: 'left',
  wordSpacing: 'normal',
  wordBreak: 'normal',
  overflowWrap: 'normal',
  fontSize: '0.75rem',
  lineHeight: 1.5,
  tabSize: 2,
  hyphens: 'none',
  textShadow: 'none',

  '.token.comment, .token.block-comment, .token.prolog, .token.doctype, .token.cdata, .token.punctuation, .token.operator': {
    color: theme.colours.textSecondary,
  },

  '.token.property, .token.tag, .token.boolean, .token.number, .token.function-name, .token.constant, .token.symbol, .token.deleted, .token.builtin': {
    color: theme.colours.red,
  },

  '.token.selector, .token.attr-name, .token.string, .token.char, .token.function, .token.inserted': {
    color: theme.colours.green,
  },

  '.token.atrule, .token.attr-value, .token.keyword, .token.class-name': {
    color: theme.colours.blue,
  },

  '.token.regex, .token.important': {
    color: theme.colours.orange,
  },

  '.language-css .token.string, .style .token.string': {
    color: theme.colours.yellow,
  },
}));

interface CodeBlockProps {
  value: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ value, language }) => {
  const theme = useTheme();

  return (
    <Column alignItems='flex-start'>
      <span
        css={{
          color: theme.colours.textSecondary,
          backgroundColor: theme.colours.backgroundHighlight,
          padding: '8px 12px',
          fontSize: '0.9rem',
        }}>
        {language}
      </span>
      <SyntaxHighlighter
        language={language}
        useInlineStyles={false}
        PreTag={Pre}
        CodeTag={Code}
        codeTagProps={{}}>
        {value}
      </SyntaxHighlighter>
    </Column>
  );
};

CodeBlock.displayName = 'CodeBlock';

export default CodeBlock;
