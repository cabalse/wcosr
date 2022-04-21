import { ConventionBlockInterface } from '../../components/block/ConventionBlock';
import { ConvetionScheduleBlockInterface } from '../../components/block/ConvetionScheduleBlock';
import { HeaderBlockInterface } from '../../components/block/HeaderBlock';
import { LinkBlockInterface } from '../../components/block/LinkBlock';
import { TextBlockInterface } from '../../components/block/TextBlock';
import BlockComponentType from '../../types/BlockComponentType';
import { ConventionScheduleBlockInterface } from '../../types/ConventionInterfaces';
import { PageContentInterface } from '../../types/PageContentInterface';

const kryptCon: PageContentInterface = {
  content: [
    {
      header: 'KryptCon',
      body: [{
        text: `KryptCon är (troligen) Sveriges yngsta, fräckaste, och Göteborgs enda OSR konvent. Det hålls ett flertal gånger per år
        men har under pandemin 20-21 legat i träda. Men nu är vi igång igen.`,
      },
      {
        text: `Vi håller på att flytta över informationen från vår gamla, nedlagd, sajt, därav att det är lite stökigt. Tillsist kommer
        alla gamla KryptCon att finnas tillgängliga för den som vill gå en trip down memory-lane.`,
        class: 'italic',
      }],
      type: BlockComponentType.TextBlock,
    } as TextBlockInterface,
    // {
    //   linkText: 'KryptCon 1',
    //   internalUrl: '/kryptcon1',
    //   type: BlockComponentType.LinkBlock,
    // } as LinkBlockInterface,
    // {
    //   linkText: 'KryptCon 2',
    //   internalUrl: '/kryptcon2',
    //   type: BlockComponentType.LinkBlock,
    // } as LinkBlockInterface,
    // {
    //   linkText: 'KryptCon 3',
    //   disabled: true,
    //   type: BlockComponentType.LinkBlock,
    // } as LinkBlockInterface,
    // {
    //   linkText: 'KryptCon 4',
    //   disabled: true,
    //   type: BlockComponentType.LinkBlock,
    // } as LinkBlockInterface,
    {
      linkText: 'KryptCon 5',
      internalUrl: '/kryptcon5',
      type: BlockComponentType.LinkBlock,
    } as LinkBlockInterface,
    {
      linkText: 'KryptCon 6',
      internalUrl: '/kryptcon6',
      type: BlockComponentType.LinkBlock,
    } as LinkBlockInterface,
  ],
};

const kryptCon1: PageContentInterface = {
  content: [
    {
      header: 'KryptCon 1',
      class: '',
      type: BlockComponentType.HeaderBlock,
    } as HeaderBlockInterface,
    {
      header: '',
      date: '',
      location: '',
      slots: [],
      type: BlockComponentType.ConvetionScheduleBlock,
    } as ConventionScheduleBlockInterface,
  ],
};

const kryptCon2: PageContentInterface = {
  content: [
    {
      body: [
        {
          header: 'KryptCon 2',
          class: '',
          type: BlockComponentType.HeaderBlock,
        } as HeaderBlockInterface,
        {
          body: [
            {
              text: `Den 21:e September slår vi upp portarna (Johannebergs skolan) för
              KryptCon #2. Vi har denna gången fått ihop nio arrangemang som vi
              delat upp på två pass, Pass 1 mellan 11:00 - 15:00 och Pass 2 mellan
              16:00 - 20:00.`,
            },
            {
              text: `För anmälan till de olika arrangemangen och passen så använder vi
              Volunteersignup.org. Anmäl er bara till de arrangemang och pass ni
              vill spela. Är ett något full så anmäl er till något annat och
              skicka sedan ett PM till oss så försöker vi sy ihop allt på bästa
              sätt. Får ni förhinder så skicka oss ett PM så öppnar vi upp platsen
              för någon annan. Har ni några frågor så är det bara att höra av sig.`,
            },
            {
              text: 'Bekräftelse på anmälan skickas inte ut automatiskt, men den kommer :)',
            },
            {
              text: 'Vi ser fram emot att träffa er alla!',
            },
            {
              text: 'Välkomna till KryptCon 2',
              class: 'mt-5',
            },
            {
              text: 'Mvh Umbillicus undersåtar Tobias, Jörgen och Markus',
              class: 'italic',
            },
          ],
          type: BlockComponentType.TextBlock,
        } as TextBlockInterface,
      ],
      schedule: [
        {
          header: 'KryptCon 2',
          location: 'Johannebergsskolan',
          date: '2019-10-21',
          slots: [
            {
              name: 'Slot 1',
              start: '11:00',
              stop: '15:00',
            },
            {
              name: 'Slot 2',
              start: '16:00',
              stop: '20:00',
            },
          ],
          type: BlockComponentType.ConvetionScheduleBlock,
        } as ConvetionScheduleBlockInterface,
      ],
      type: BlockComponentType.ConventionBlock,
    } as ConventionBlockInterface,
  ],
};

//     {
//       header: 'High up among the stars pt2',
//       body: [`You are people from different eras and places. One day, you woke up
//     only to have found yourselves having been abducted by alien
//     creatures. Co-operating with your strange bedfellows, you fought off
//     many a wierd monsters until you finally managed to escape the
//     strange place in a so called spacecraft. All good things cannot last
//     however, and your vessel was promptly captured by another larger
//     ship. As you hear the cutting torches tearing a hole in your hull,
//     you ready your weapons and wonder: What will happen, high up among
//     the stars? (Nya som gamla spelare är välkomna)`],
//       rules: 'Dungeon Crawl Classics',
//       gm: 'Simon Sultan',
//       slot: {
//         name: '1',
//         start: '11:00',
//         stop: '15:00',
//       },
//       players: 6,
//       type: BlockComponentType.ConventionEventBlock,
//     } as ConventionEventBlockInterface,
//   ],
// };

export {
  kryptCon, kryptCon1, kryptCon2,
};
