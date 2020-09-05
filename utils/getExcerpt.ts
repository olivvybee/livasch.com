import removeMarkdown from 'remove-markdown';

interface GetExcerptParmas {
  body: string;
  maxCharacterCount?: number;
  maxWordCount?: number;
}

export const getExcerpt = ({
  body,
  maxCharacterCount,
  maxWordCount,
}: GetExcerptParmas) => {
  const [firstParagraph] = body.split('\n\n');
  const [rawText] = firstParagraph.split('<!-- more -->');
  const plainText = removeMarkdown(rawText);

  if (maxCharacterCount) {
    return plainText.substr(0, maxCharacterCount).trim() + ' ...';
  }

  if (maxWordCount) {
    return plainText.split(' ').slice(0, maxWordCount).join(' ');
  }

  return plainText;
};
