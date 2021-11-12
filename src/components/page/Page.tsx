import React, { ReactElement } from 'react';
import { PageContentInterface } from '../../types/PageContentInterface';

import PageContent from './PageContent';
import PageHeader from './PageHeader';

export default function Page({ content }: PageContentInterface): ReactElement {
  return (
    <div className="h-full bg-black text-white pb-10">
      <PageHeader />
      <PageContent content={content} />
    </div>
  );
}
