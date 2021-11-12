import React, { ReactElement } from 'react';
import BlockComponentType from '../../types/BlockComponentType';
import BlockInterface from '../../types/BlockInterface';
import componentBlockMapper from '../componentBlockMap';
import HeaderBlock from './HeaderBlock';

interface ConvetionScheduleInfoBlockInterface extends BlockInterface {
    header?: string;
    date?: string;
    location?: string;
  }

interface ConventionBlockInterface extends BlockInterface {
    header?: string;
    body?: BlockInterface[];
    schedule?: BlockInterface[];
}

const ConventionBlock = ({
  header, body, schedule, outerClass,
}: ConventionBlockInterface): ReactElement => (
  <>
    <HeaderBlock header={header} type={BlockComponentType.HeaderBlock} />
    <div className="flex flex-col md:flex-row">
      <div className="md:w-7/12">{componentBlockMapper(body)}</div>
      <div className="md:w-5/12 pl-4 pr-4">{componentBlockMapper(schedule)}</div>
    </div>
  </>
);

export default ConventionBlock;
export type { ConventionBlockInterface };
