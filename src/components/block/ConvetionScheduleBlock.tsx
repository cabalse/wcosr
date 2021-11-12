import React, { ReactElement } from 'react';
import { ConventionScheduleHeader } from '../../styles/styles';
import BlockInterface from '../../types/BlockInterface';
import ConventionSlotBlock, { ConvetionSlotInterface } from './ConventionSlotBlock';

interface ConvetionScheduleBlockInterface extends BlockInterface {
  header?: string;
  date?: string;
  location?: string;
  slots?: ConvetionSlotInterface[];
}

const ConvetionScheduleBlock = (
  {
    header, date, location, slots,
  }: ConvetionScheduleBlockInterface,
): ReactElement => {
  const slotsMapper = (element: ConvetionSlotInterface): ReactElement => (
    <ConventionSlotBlock {...element} />
  );
  return (
    <div className="container bg-wcosr_yellow rounded-md text-black mt-3 p-5 md:ml-5">
      <div className={ConventionScheduleHeader}>{header}</div>
      <div>{date}</div>
      <div>{location}</div>
      {slots?.map(slotsMapper)}
    </div>
  );
};

export default ConvetionScheduleBlock;
export type { ConvetionScheduleBlockInterface };
