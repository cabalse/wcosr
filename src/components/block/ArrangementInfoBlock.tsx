import React, { ReactElement } from 'react';
import { ConventionScheduleHeader } from '../../styles/styles';
import BlockInterface from '../../types/BlockInterface';
import ConventionSlotBlock, { ConvetionSlotInterface } from './ConventionSlotBlock';

interface ArrangementInfoBlockInterface extends BlockInterface {
  header?: string;
  dm?: string;
  slot?: string;
  players?: string;
  language?: string;
  age?: string;
}

const ArrangementInfoBlock = (
  {
    header, dm, slot, players, language, age,
  }: ArrangementInfoBlockInterface,
): ReactElement => (
  <div className="container bg-darkgrey text-white rounded-md mt-3 p-5 md:ml-5 pl-4 pr-4">
    <div className="font-bold">{header}</div>
    <div>{`Spelledare: ${dm}`}</div>
    <div>{`Pass: ${slot}`}</div>
    <div>{`Antal spelare: ${players}`}</div>
    {language ? <div>{`Språk: ${language}`}</div> : null}
    {age ? <div>{`Åldersgräns: ${age}`}</div> : null}
  </div>
);

export default ArrangementInfoBlock;
export type { ArrangementInfoBlockInterface };
