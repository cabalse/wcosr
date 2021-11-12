import React, { ReactElement } from 'react';
import ConventionHeader from './ConventionHeader';
import ConventionIntroText from './ConventionIntroText';
import ConvetionScheduleInfo from './ConvetionScheduleInfo';

interface Props {
    data: any;
}

export default function Convention({ data }: Props): ReactElement {
  return (
    <>
      <ConventionHeader data={data} />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-7/12"><ConventionIntroText paragraphs={data.body} /></div>
        <div className="md:w-5/12"><ConvetionScheduleInfo schedule={data.schedule} /></div>
      </div>
    </>
  );
}
