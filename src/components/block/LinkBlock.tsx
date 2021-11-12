import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { defaultBlockOuterClass } from '../../styles/styles';
import BlockInterface from '../../types/BlockInterface';

interface LinkBlockInterface extends BlockInterface {
  linkText?: string;
  internalUrl?: string,
  externalUrl?: string,
  disabled?: boolean,
}

const LinkBlock = (
  {
    linkText,
    disabled,
    internalUrl,
    externalUrl,
    outerClass,
  }: LinkBlockInterface,
): ReactElement => {
  const linkTo = internalUrl || '/';
  const href = externalUrl || '/';
  const classes = `pl-4 pr-4 ${outerClass || defaultBlockOuterClass}`;
  const formatedLinkText = ` - ${linkText}`;
  return (
    <div className={classes}>
      <div className="flex flex-col text-wcosr_yellow">
        {!disabled
          ? (
            <>
              {internalUrl
                ? (
                  <Link to={linkTo}>{formatedLinkText}</Link>
                )
                : (
                  <a href={href} target="_">{formatedLinkText}</a>
                )}

            </>
          )
          : (
            <p>{formatedLinkText}</p>
          )}
      </div>
    </div>
  );
};

export default LinkBlock;
export type { LinkBlockInterface };
