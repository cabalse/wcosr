import React, { ReactElement } from 'react';

interface Props {
  children?: React.ReactNode
}

function PageMenu({ children }: Props): ReactElement {
  return (
    <div className="flex flex-row items-end">
      {React.Children.map(children, (child: React.ReactNode): ReactElement => <div className="pl-3">{child}</div>)}
    </div>
  );
}

PageMenu.defaultProps = {
  children: [],
};

export default PageMenu;
