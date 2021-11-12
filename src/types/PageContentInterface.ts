// interface ConventionHeaderBlockInterface {
//     header?: string;
// }

import BlockInterface from './BlockInterface';

// interface ConventionIntroTextInterface extends BlockInterface {
//     paragraphs?: BlockInterface[];
//   }

// interface ConvetionScheduleInfoBlockInterface extends BlockInterface {
//     header?: string;
//     date?: string;
//     location?: string;
//   }

// export type {
//   ImageBlockInterface,
//   ParagraphInterface, PageContentInterface,
//   BlockInterface,
//   LinkBlockInterface, ConventionBlockInterface,
//   ConventionHeaderBlockInterface, ConventionIntroTextInterface,
//   ConvetionScheduleInfoBlockInterface,
// };

interface PageContentInterface {
    content: BlockInterface[];
}

// eslint-disable-next-line import/prefer-default-export
export type { PageContentInterface };
