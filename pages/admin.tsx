import React, { useEffect } from 'react';

import PostPreview from '../preview-templates/PostPreview';
import PagePreview from '../preview-templates/PagePreview';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();

      CMS.registerPreviewTemplate('article', PostPreview);
      CMS.registerPreviewTemplate('page', PagePreview);
    })();
  }, []);

  return <div />;
};

export default Admin;
