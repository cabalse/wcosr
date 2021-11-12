import React, { ReactElement } from 'react';
import BlockComponentType from '../../types/BlockComponentType';
import BlockInterface from '../../types/BlockInterface';
import componentBlockMapper from '../componentBlockMap';
import HeaderBlock from './HeaderBlock';

interface ArrangementBlockInterface extends BlockInterface {
    header?: string;
    body?: BlockInterface[];
    information?: BlockInterface[];
}

const ArrangementBlock = ({
  header, body, information, outerClass,
}: ArrangementBlockInterface): ReactElement => (
  <div className={outerClass}>
    <HeaderBlock header={header} type={BlockComponentType.HeaderBlock} />
    <div className="flex flex-col md:flex-row">
      <div className="md:w-7/12">{componentBlockMapper(body)}</div>
      <div className="md:w-5/12 pl-4 pr-4">{componentBlockMapper(information)}</div>
    </div>
  </div>
);

export default ArrangementBlock;
export type { ArrangementBlockInterface };
