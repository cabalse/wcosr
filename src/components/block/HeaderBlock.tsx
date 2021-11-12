import React, { ReactElement } from 'react';
import { BlockHeader, defaultBlockOuterClass } from '../../styles/styles';
import BlockInterface from '../../types/BlockInterface';

interface HeaderBlockInterface extends BlockInterface {
    header?: string;
    outerClass?: string;
}

const HeaderBlock = (
  {
    header,
    outerClass,
  }: HeaderBlockInterface,
): ReactElement => {
  const classes = `pl-4 pr-4 ${outerClass || defaultBlockOuterClass}`;
  return (
    <div className={classes}>
      <div className={BlockHeader}>{header}</div>
    </div>
  );
};

export default HeaderBlock;
export type { HeaderBlockInterface };
