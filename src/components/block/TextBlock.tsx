import React, { ReactElement } from 'react';
import { BlockHeader, defaultBlockOuterClass, defaultParagraphClass } from '../../styles/styles';
import BlockInterface from '../../types/BlockInterface';
import ParagraphInterface from '../../types/ParagraphInterface';

interface TextBlockInterface extends BlockInterface {
  header?: string;
  body?: ParagraphInterface[];
  paragraphClass?: string;
}

const TextBlock = (
  {
    header, body, outerClass, paragraphClass,
  }: TextBlockInterface,
): ReactElement => {
  const styleText = (text: string | undefined): ReactElement => <>{text}</>;
  const paragraphMapper = (paragraph: ParagraphInterface, index: number): ReactElement => {
    const paragraphClasses = index === 0 ? `${paragraph.class}` : `${paragraph.class} ${paragraphClass || defaultParagraphClass}`;
    return (<div className={paragraphClasses}>{styleText(paragraph.text)}</div>
    );
  };
  const classes = `pl-4 pr-4 ${outerClass || defaultBlockOuterClass}`;
  const innerClasses = `flex flex-col ${header ? outerClass || defaultBlockOuterClass : ''}`;
  return (
    <div className={classes}>
      <div className={BlockHeader}>{header}</div>
      <div className={innerClasses}>
        {body && body.map(paragraphMapper)}
      </div>
    </div>
  );
};

export default TextBlock;
export type { TextBlockInterface };
