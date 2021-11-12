import { ArrangementBlockInterface } from '../../components/block/ArrangementBlock';
import { ArrangementInfoBlockInterface } from '../../components/block/ArrangementInfoBlock';
import { ConventionBlockInterface } from '../../components/block/ConventionBlock';
import { ConvetionScheduleBlockInterface } from '../../components/block/ConvetionScheduleBlock';
import { HeaderBlockInterface } from '../../components/block/HeaderBlock';
import { ImageBlockInterface } from '../../components/block/ImageBlock';
import { LinkBlockInterface } from '../../components/block/LinkBlock';
import { TextBlockInterface } from '../../components/block/TextBlock';
import BlockComponentType from '../../types/BlockComponentType';
import { PageContentInterface } from '../../types/PageContentInterface';

const kc2021TShirt: PageContentInterface = {
  content: [
      {
        header: 'KryptCon 2021 T-shirt',
        body: [
          {
            text: 'Vi har tagit fram en KryptCon 2021 t-shirt för våra trogna besökare. Inga besökare, inget KryptCon.',
          },
          {
            text: 'För att vi skall kunna överräcka t-shirten på KryptCon 5 (20/11) så måste vi göra beställningen senast 25/10.',
          },
          {
            text: ' Så vill ni ha en t-shirt, swisha 210:- till 0703 79 05 60 (Jörgen Bengtsson). Ange storlek (storlekar hittar ni längst ned på sidan, saxat från spreadshirt.se), namn samt ”KCTshirt”. Detta måste göras senast den 24/10.',
          },
          {
            text: 'Mvh Umbillicus undersåtar Katja, Tobias, Jörgen och Markus',
            class: 'italic mb-5',
          },
        ],
        type: BlockComponentType.TextBlock,
      } as TextBlockInterface,
      {
        image: 'http://wcosr.se/images/kc-2021-tshirt.png',
        alt: 'KC Tshirt Front',
        caption: 'KryptCon 2021 T-Shirt',
        outerClass: 'w-3/4',
        type: BlockComponentType.ImageBlock,
      } as ImageBlockInterface,
      {
        image: 'http://wcosr.se/images/sl-tshirt-storlek.png',
        alt: 'Storlekstabell',
        caption: 'Storlekar från Spreadshirt.se',
        outerClass: '',
        type: BlockComponentType.ImageBlock,
      } as ImageBlockInterface,
  ],
};

export default kc2021TShirt;
