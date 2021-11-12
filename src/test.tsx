import React, { FunctionComponent, PropsWithChildren, ReactElement } from 'react';

interface BaseInterface {
    text: string;
}

interface AInterface extends BaseInterface {
    text2?: string;
}

interface BInterface extends BaseInterface {
    text3?: string;
}

const baseBlock = (props: BaseInterface): ReactElement => <>{props.text}</>;

const aBlock = (props: AInterface): ReactElement => <>{props.text}</>;

const bBlock = (props: BInterface): ReactElement => <>{props.text}</>;

const componentBlockMap: Record<string, FunctionComponent<AInterface>> = {
  Base: baseBlock,
  A: aBlock,
  B: bBlock,
};
