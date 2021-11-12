import React, { ReactElement, FunctionComponent } from 'react';
import BlockInterface from '../types/BlockInterface';
import ArrangementBlock from './block/ArrangementBlock';
import ArrangementInfoBlock from './block/ArrangementInfoBlock';
import ConventionBlock from './block/ConventionBlock';
import ConvetionScheduleBlock from './block/ConvetionScheduleBlock';
import HeaderBlock from './block/HeaderBlock';
import ImageBlock from './block/ImageBlock';

import LinkBlock from './block/LinkBlock';
import TextBlock from './block/TextBlock';

const componentBlockMap: Record<string, FunctionComponent<BlockInterface>> = {
  TextBlock,
  LinkBlock,
  ImageBlock,
  HeaderBlock,
  ConventionBlock,
  ConvetionScheduleBlock,
  ArrangementBlock,
  ArrangementInfoBlock,
};

const componentBlockMapper = (content: BlockInterface[] | undefined):ReactElement[] => {
  const components:ReactElement[] = [];
  if (content) {
    content.forEach((element: BlockInterface) => {
      const block = componentBlockMap[element.type];
      if (block) components.push(React.createElement(block, element));
    });
  }
  return components;
};

export default componentBlockMapper;
