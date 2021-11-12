import React, { ReactElement } from 'react';

interface Props {
    data: any;
}

export default function ConventionHeader({ data }: Props): ReactElement {
  return (
    <div>
      <div>{data.header}</div>
    </div>
  );
}
