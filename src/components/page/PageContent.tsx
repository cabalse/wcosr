import React, { ReactElement } from 'react';
import { PageContentInterface } from '../../types/PageContentInterface';
import componentBlockMapper from '../componentBlockMap';

export default function PageContent({ content }: PageContentInterface): ReactElement {
  return (
    <div className="flex flex-col items-center pt-5">
      <div className="w-full md:w-9/12">{componentBlockMapper(content)}</div>
    </div>
  );
}
