import React, { ReactElement } from 'react';

interface Props {
    schedule: any;
}

export default function ConvetionScheduleInfo({ schedule }:Props): ReactElement {
  return (
    <div className="container bg-wcosr_yellow rounded-md text-black mt-3 p-5 md:ml-5">
      <div className="text-3xl font-bold">{schedule.header}</div>
      <div>{schedule.date}</div>
      <div>{schedule.location}</div>
      <div>Slots</div>
    </div>
  );
}
