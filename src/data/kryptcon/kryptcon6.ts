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

const kryptCon6: PageContentInterface = {
  content: [
      // Intro Text
      {
        body: [
          {
            body: [
              {
                text: `KryptCon #6 står för dörren. De fem tidigare (...eller är det fyra?)
                KryptCons har bara varit uppvärmning inför denna, nummer 6. Kanske är detta
                siffran som får Umbilicus att stiga ner på Jorden och ta sin tron i besittning.
                Eller nästa, eller kanske den efter. Vem vet? Vi får hålla på så länge det går
                helt enkelt.`,
              },
              {
                text: `För anmälan till de olika arrangemangen och passen så använder vi
                Volunteersignup.org. Anmäl er bara till de arrangemang och pass ni
                vill spela. Är ett pass full så anmäl er till något annat och
                skicka sedan ett mail till oss så försöker vi sy ihop allt på bästa
                sätt. Får ni förhinder så skicka oss ett mail så öppnar vi upp platsen
                för någon annan. Har ni några frågor så är det bara att höra av sig.`,
              },
              {
                text: 'Bekräftelse på anmälan skickas inte ut automatiskt.',
              },
              {
                text: 'KryptCon är gratis!',
              },
              {
                text: 'KryptCon#6 går av stapeln den 7/5 - 2022 på Johannebergsskolan i Göteborg.',
              },
              {
                text: 'Välkomna till KryptCon',
                class: 'mt-5',
              },
              {
                text: 'Mvh Umbillicus undersåtar Tobias, Katja, Jörgen och Markus',
                class: 'italic mb-5',
              },
            ],
            type: BlockComponentType.TextBlock,
          } as TextBlockInterface,
        ],
        schedule: [
          {
            header: 'KryptCon 6',
            location: 'Johannebergsskolan, Göteborg',
            date: '2021-05-07',
            slots: [
              {
                name: 'Pass 1',
                start: '11:00',
                stop: '15:00',
              },
              {
                name: 'Pass 2',
                start: '16:00',
                stop: '20:00',
              },
            ],
            type: BlockComponentType.ConvetionScheduleBlock,
          } as ConvetionScheduleBlockInterface,
        ],
        type: BlockComponentType.ConventionBlock,
      } as ConventionBlockInterface,
      {
        header: 'Anmälan',
        type: BlockComponentType.HeaderBlock,
      } as HeaderBlockInterface,
      {
        linkText: 'Anmälan för KryptCon görs här (volunteersignup.org)',
        externalUrl: 'https://volunteersignup.org/RR39M',
        outerClass: 'mt-5 mb-5',
        type: BlockComponentType.LinkBlock,
      } as LinkBlockInterface,
      {
        header: 'Kontakt Oss',
        type: BlockComponentType.HeaderBlock,
      } as HeaderBlockInterface,
      {
        header: '',
        body: [
          {
            text: 'Har du frågor, funderingar, kontakta oss på FB (WCOSR) eller via mail info[at]wcosr.se',
            class: '',
          },
        ],
        outerClass: 'mb-5',
        paragraphClass: '',
        type: BlockComponentType.TextBlock,
      } as TextBlockInterface,
      {
        header: 'Arrangemang',
        type: BlockComponentType.HeaderBlock,
        outerClass: 'mt-10',
      } as HeaderBlockInterface,
      // ------------------------------------------------------------------------------------------
      // Escape the Organ Rail
      // ------------------------------------------------------------------------------------------
      {
        header: 'Escape the Organ Rail',
        body: [
          {
            body: [
              {
                text: `You are prisoners aboard the Organ Rail, a penal train clad in black iron,
                spewing blood-red smoke as it rattles across the tracks of the Big Nothing. Rumors
                say its belly-vault contains the confiscated swag of a thousand robberies gone wrong.`,
              },
              {
                text: `The next stop is Fort Gullet, where you’ll be hanged for your crimes, so you
                better get a wiggle on! To get out alive, you’ll need enough supplies to get you across
                the sweltering sands to the swamp-oasis of Sickwater; no straight-shootin’ lawfolk would
                ever set foot in that veritable rat’s nest of thieves and outlaws. Yup, that’s your only
                chance.`,
              },
              {
                text: 'Of course, it couldn’t hurt to have a look in that vault while you’re here...could it?',
              },
            ],
            type: BlockComponentType.TextBlock,
          } as TextBlockInterface,
        ],
        information: [
          {
            header: 'FRONTIER SCUM',
            dm: 'Karl Druid',
            slot: '1 [11 - 15]',
            players: '5',
            language: 'Svenska/English',
            age: '18+',
            type: BlockComponentType.ArrangementInfoBlock,
          } as ArrangementInfoBlockInterface,
        ],
        outerClass: 'mt-7',
        type: BlockComponentType.ArrangementBlock,
      } as ArrangementBlockInterface,
      // ------------------------------------------------------------------------------------------
      // Flykten från Igrebann
      // ------------------------------------------------------------------------------------------
      {
        header: 'Flykten från Igrebann',
        body: [
          {
            body: [
              {
                text: 'Ingen brukade tala om den sorgliga hålan Igrebann som låg på en liten ö i floden utanför Galgenbeck. Det brukade inte finnas något värt att nämna, inget som gjort avtryck i historien. Likväl var det ingen som talade om er, ni förlorade själar som stannade där den sista, långa natten. Er vistelse skulle varit kort, en enkel övernattning på värdshuset Sista skålen, men så gick solen aldrig upp igen och floden började koka. Gastkramande skrik och en tystnad som i graven avlöste varandra utanför. Ni väntade i två dagar på värdshuset innan ni bestämde er för att fly. För att försöka fly.',
              },
              {
                text: 'Vare sig någon klarade sig levande från Igrebann eller inte saknar betydelse, för det liv som återstod vara bara andetag innan slutet. Nechrubels nedräkning, undergången, hade börjat.',
              },
            ],
            type: BlockComponentType.TextBlock,
          } as TextBlockInterface,
        ],
        information: [
          {
            header: 'Mörk Borg',
            dm: 'Karl Olsson',
            slot: 'Pass 1 [11 - 15]',
            players: '2-5',
            language: 'Svenska',
            age: '18+',
            type: BlockComponentType.ArrangementInfoBlock,
          } as ArrangementInfoBlockInterface,
        ],
        outerClass: 'mt-8',
        type: BlockComponentType.ArrangementBlock,
      } as ArrangementBlockInterface,
      // ------------------------------------------------------------------------------------------
      // The Domed Palace of Binider the Perceiver of the Peculia
      // ------------------------------------------------------------------------------------------
      {
        header: 'The Domed Palace of Binider the Perceiver of the Peculia',
        body: [
          {
            body: [
              {
                text: 'Deep beneath a lake in the Fantastic Administrative garden in Magitek Praecinctum, Benider resides in his Domed glass palace.',
              },
              {
                text: 'One can only access the palace by making a vortex in the lake. There is no ladder, so some form of boat and rope is to be preferred. Having repelled oneself down, one arrives in a courtyard in front of the fantastic domed palace of Binider the Perceiver of the Peculiar.',
              },
              {
                text: "There's rumors of fantastic treasures, horrible monsters and weird machines. Who wouldn't want to break in and check it out?",
              },
            ],
            type: BlockComponentType.TextBlock,
          } as TextBlockInterface,
        ],
        information: [
          {
            header: 'Swords & Wizardry Complete',
            dm: 'Tobias Tarnvik-Laeske',
            slot: '1 [11 - 15]',
            players: '2-5',
            language: 'Svenska',
            age: '18+',
            type: BlockComponentType.ArrangementInfoBlock,
          } as ArrangementInfoBlockInterface,
        ],
        outerClass: 'mt-8',
        type: BlockComponentType.ArrangementBlock,
      } as ArrangementBlockInterface,
      // ------------------------------------------------------------------------------------------
      // Titanic Stress
      // ------------------------------------------------------------------------------------------
      {
        header: 'Titanic Stress',
        body: [
          {
            body: [
              {
                text: "You're a bunch of thieves, grifters and con-artists set on executing the heist that will set you up for life. It's the final job.",
              },
              {
                text: 'It’s a pity that you have execute it right now, one week ahead of the plans.',
              },
            ],
            type: BlockComponentType.TextBlock,
          } as TextBlockInterface,
        ],
        information: [
          {
            header: 'TBA',
            dm: 'Skander',
            slot: 'Pass 1 [11 - 15]',
            players: '3-7',
            language: 'Svenska',
            age: '14+',
            type: BlockComponentType.ArrangementInfoBlock,
          } as ArrangementInfoBlockInterface,
        ],
        outerClass: 'mt-8',
        type: BlockComponentType.ArrangementBlock,
      } as ArrangementBlockInterface,
      // ------------------------------------------------------------------------------------------
      // Attack on the Amaranth Temple
      // ------------------------------------------------------------------------------------------
      {
        header: 'Attack on the Amaranth Temple',
        body: [
          {
            body: [
              {
                text: 'Many eons ago, an ancient race of alien Sorcerers placed huge tanks with giant artificial brains in different galaxies to collect knowledge about the worlds therein. After the earth, as we know it, died and was reborn again, some monks found one of these long-forgotten brains inside a pink-stoned temple and have worshipped it ever since.',
              },
              {
                text: "Now we haven't heard anything from the monks for many weeks, has something happened to them? Someone should probably go check it out.",
              },
            ],
            type: BlockComponentType.TextBlock,
          } as TextBlockInterface,
        ],
        information: [
          {
            header: 'Swords & Wizardry Complete',
            dm: 'Tobias Tarnvik-Laesker',
            slot: 'Pass 2 [16 - 20]',
            players: '2-5',
            language: 'Svenska m Engelska termer',
            age: '18+',
            type: BlockComponentType.ArrangementInfoBlock,
          } as ArrangementInfoBlockInterface,
        ],
        outerClass: 'mt-8',
        type: BlockComponentType.ArrangementBlock,
      } as ArrangementBlockInterface,
      // ------------------------------------------------------------------------------------------
      // Better Dead than Dredd
      // ------------------------------------------------------------------------------------------
      {
        header: 'Better Dead than Dredd',
        body: [
          {
            body: [
              {
                text: 'You have answered the call of Law and Justice to become Judges on the streets of Mega-City One. Not that you ever had a choice. But this is your life now, as long as it lasts.',
              },
              {
                text: `After fifteen years of gruelling training and countless more years as a Cadet Judge, you now
                face the last exam, The Evaluation. Pass and become a Judge, don the Black Helmet,
                and wear the full Eagle badge. Fail and be condemned to try to live your life as an ordinary citizen.`,
              },
            ],
            type: BlockComponentType.TextBlock,
          } as TextBlockInterface,
          {
            image: 'http://wcosr.se/images/judge-dredd.jpg',
            alt: 'KC SL Back',
            caption: '',
            outerClass: 'w-3/4',
            type: BlockComponentType.ImageBlock,
          } as ImageBlockInterface,
        ],
        information: [
          {
            header: 'Dredd Into the Odd',
            dm: 'Jörgen Bengtsson',
            slot: '2 [16 - 20]',
            players: '2-5',
            language: 'Svenska',
            age: '-',
            type: BlockComponentType.ArrangementInfoBlock,
          } as ArrangementInfoBlockInterface,
        ],
        outerClass: 'mt-8',
        type: BlockComponentType.ArrangementBlock,
      } as ArrangementBlockInterface,
  ],
};

export default kryptCon6;
