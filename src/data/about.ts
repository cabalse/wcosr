import { LinkBlockInterface } from '../components/block/LinkBlock';
import { TextBlockInterface } from '../components/block/TextBlock';
import BlockComponentType from '../types/BlockComponentType';
import { PageContentInterface } from '../types/PageContentInterface';

const about: PageContentInterface = {
  content: [
    {
      body: [
        {
          text: 'Mer information kommer!!!',
          class: 'italic',
        }],
      outerClass: '',
      paragraphClass: '',
      type: BlockComponentType.TextBlock,
    } as TextBlockInterface,
  ],
};

export default about;
