import { LinkBlockInterface } from '../components/block/LinkBlock';
import { TextBlockInterface } from '../components/block/TextBlock';
import BlockComponentType from '../types/BlockComponentType';
import { PageContentInterface } from '../types/PageContentInterface';

const home: PageContentInterface = {
  content: [
    {
      header: '',
      body: [{
        text: `West Coast Old School Roleplaying [WCOSR] är ett initiativ att
      skapa mer medvetenhet om och intresse för OSR delen av RPG hobbyn.`,
        class: '',
      },
      {
        text: `WCOSR skapades tillsammans med KryptCon under våren 2019 av
      Markus, Tobias och Jörgen.`,
        class: '',
      }],
      outerClass: '',
      paragraphClass: '',
      type: BlockComponentType.TextBlock,
    } as TextBlockInterface,
    {
      linkText: 'Vad är OSR rollspelande?',
      internalUrl: '/what-is-osr',
      outerClass: '',
      type: BlockComponentType.LinkBlock,
    } as LinkBlockInterface,
    {
      body: [
        {
          text: 'Mer information kommer!!!',
          class: 'italic',
        }],
      paragraphClass: '',
      outerClass: '',
      type: BlockComponentType.TextBlock,
    } as TextBlockInterface,
  ],
};

export default home;
