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

const kcSLTShirt: PageContentInterface = {
  content: [
      {
        header: 'KryptCon SL t-shirt',
        body: [
          {
            text: `Vi har tagit fram en KryptCon Spelledar t-shirt för de tappra själar som ställer upp för KryptCon/Umbilicus,
            vilket vi är oerhört tacksamma för.  Utan er, inget KryptCon.`,
          },
          {
            text: `Som tack så får ni bekosta denna t-shirt helt själva ;) om ni vill! Åtminstone så ombesörjer vi beställning
            och distribution (hand-till-hand på KryptCon). Alltid något.`,
          },
          {
            text: `För att vi skall kunna överräcka t-shirten på KryptCon 5 (20/11) så måste vi göra beställningen senast 25/10.
            Så vill ni ha en t-shirt, swisha 270:- till 0703 79 05 60 (Jörgen Bengtsson). Ange storlek (storlekar hittar ni längst
            ned på sidan, saxat från spreadshirt.se), namn samt ”SLTshirt”. Senast den 24/10.`,
          },
          {
            text: 'Mvh Umbillicus undersåtar Katja, Tobias, Jörgen och Markus',
            class: 'italic mb-5',
          },
        ],
        type: BlockComponentType.TextBlock,
      } as TextBlockInterface,
      {
        image: 'http://wcosr.se/images/kc-sl-tshirt-front.png',
        alt: 'KC SL Front',
        caption: 'Spelledar T-Shirt Framsida',
        outerClass: 'w-3/4',
        type: BlockComponentType.ImageBlock,
      } as ImageBlockInterface,
      {
        image: 'http://wcosr.se/images/kc-sl-tshirt-back.png',
        alt: 'KC SL Back',
        caption: 'Spelledar T-Shirt Baksida',
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

export default kcSLTShirt;
