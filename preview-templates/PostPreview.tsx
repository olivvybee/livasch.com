import React from 'react';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';
import PreviewTemplate from './PreviewTemplate';
import PostPage from '../pages/[...slug]';

interface PostPreviewProps extends PreviewTemplateComponentProps {
  document: Document;
  window: Window;
}

const PostPreview: React.FC<PostPreviewProps> = ({
  entry,
  window,
  document,
}) => {
  const title = entry.getIn(['data', 'title']) || '';
  const date = entry.getIn(['data', 'date']);
  const body = entry.getIn(['data', 'body']) || '';
  const tags = entry.getIn(['data', 'tags']) || [];
  const slug = entry.getIn(['data', 'slug']);

  return (
    <PreviewTemplate window={window} document={document}>
      <PostPage title={title} date={date} body={body} tags={tags} url={slug} />
    </PreviewTemplate>
  );
};

export default PostPreview;
