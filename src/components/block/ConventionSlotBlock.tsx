import React, { ReactElement } from 'react';

interface ConvetionSlotInterface {
    name: string,
    start: string,
    stop: string,
  }

const ConventionSlotBlock = ({ name, start, stop }: ConvetionSlotInterface): ReactElement => (
  <div>
    {name}
    :
    {' '}
    {start}
    {' '}
    -
    {' '}
    {stop}
  </div>
);

export default ConventionSlotBlock;
export type { ConvetionSlotInterface };
