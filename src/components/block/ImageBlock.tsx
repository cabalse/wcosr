import React, { ReactElement } from 'react';
import BlockInterface from '../../types/BlockInterface';

interface ImageBlockInterface extends BlockInterface {
    image?: string;
    alt?: string;
    caption?: string;
    outerClass?: string;
}

const ImageBlock = ({
  image, alt, caption, outerClass,
}: ImageBlockInterface):ReactElement => (
  <div className={`ml-4 mr-4 mt-4 ${outerClass}`}>
    <img src={image} alt={alt} />
    {caption ? <div className="italic">{caption}</div> : null}
  </div>
);

export default ImageBlock;
export type { ImageBlockInterface };
