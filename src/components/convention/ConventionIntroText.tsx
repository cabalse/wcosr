import React, { ReactElement } from 'react';

interface Props {
    paragraphs: any[];
    defaultSpace?: string;
}

export default function ConventionIntroText({ paragraphs, defaultSpace }: Props): ReactElement {
  const paragraphMapper = (paragraph: any): ReactElement => {
    const classes = `${defaultSpace} ${paragraph.class}`;
    return (<div className={classes}>{paragraph.text}</div>
    );
  };
  return (
    <div className="flex flex-col">
      {paragraphs.map(paragraphMapper)}
    </div>
  );
}

ConventionIntroText.defaultProps = {
  defaultSpace: 'mt-2',
};
