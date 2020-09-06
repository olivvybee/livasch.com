import React from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import PreviewTemplate from './PreviewTemplate';
import Page from '../pages/[slug]';

interface PagePreviewProps extends PreviewTemplateComponentProps {
  document: Document;
  window: Window;
}

const PagePreview: React.FC<PagePreviewProps> = ({
  entry,
  window,
  document,
}) => {
  const title = entry.getIn(['data', 'title']);
  const body = entry.getIn(['data', 'body']);
  const slug = entry.getIn(['data', 'slug']);

  // Netlify CMS returns List types as collections from Immutable.js
  const contactLinks: any[] = entry
    .getIn(['data', 'contactLinks'])
    .toArray()
    .map((obj: any) => obj.toObject());

  return (
    <PreviewTemplate window={window} document={document}>
      <Page title={title} body={body} contactLinks={contactLinks} url={slug} />
    </PreviewTemplate>
  );
};

export default PagePreview;
