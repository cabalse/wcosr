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

const kryptCon5: PageContentInterface = {
  content: [
    // Intro Text
    {
      body: [
        {
          body: [
            {
              text: `Den 4:e Januari kommer KryptKon 3 att gå av stapeln. Umbillicus
                tjänare kommer åter att samlas i Johannebergs skolan för det
                rituella offrandet av tid. Umbillicus kräver att vi höjer Kryptcon3
                till skyarna och gör det grymmare än både 1 och 2. Åter igen är
                planen två pass, Pass 1 mellan 11:00 - 15:00 och Pass 2 mellan 16:00
                - 20:00. Men vilket arrangemang på vilket pass kommer inom kort. Då
                öppnar vi även anmälan likt förra gången.`,
            },
            {
              text: `Är du intresserad att arrangera på KryptCon 3 så är anmälan för det
                öppet. Följ länken nedan och anmäl ditt arrangemang.`,
            },
            {
              text: 'Vi ser fram emot att träffa er alla!',
            },
            {
              text: 'Välkomna till KryptCon 3',
              class: 'mt-5',
            },
            {
              text: 'Mvh Umbillicus undersåtar Markus, Tobias och Jörgen',
              class: 'italic mb-5',
            },
          ],
          type: BlockComponentType.TextBlock,
        } as TextBlockInterface,
      ],
      schedule: [
        {
          header: 'KryptCon 3',
          location: 'Johannebergsskolan, Göteborg',
          date: '2020-01-04',
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
      header: 'Arrangemang',
      type: BlockComponentType.HeaderBlock,
      outerClass: 'mt-10',
    } as HeaderBlockInterface,
    // ------------------------------------------------------------------------------------------
    // Gathox vertical slum: Quake Alley Mayhem (Tournament module)
    // ------------------------------------------------------------------------------------------
    {
      header: 'Gathox vertical slum: Quake Alley Mayhem (Tournament module)',
      body: [
        {
          body: [
            {
              text: `The Purple Rockets leader, McGrackle the Dissembler, has tasked his
              newest cadets with the retrieval of the gang’s most sacred artifact,
              Vaclav’s Holy Driver. The Driver currently resides in a safe house
              of a one-eyed alien gang known as the Kermen. The Kermen absconded
              with the device during a late-night raid on the Purple Rockets’ home
              base, a nightclub- cum-flophouse called Dirty Purple Rain Dancing.
              Now McGrackle wants to retrieve the Holy Driver and teach the Kermen
              a hard lesson about messing with his gang.`,
            },
            {
              text: `Forward surveillance has revealed the whereabouts of the Kermen
              safehouse in question, an inverted tower called The Grist Mill,
              located at the end of The Alley of Shaky Babies.This area is
              considered to be the most unstable part of the city, prone to
              constant and predictable earthquakes due to Gathox’s indigestion.
              Earthquakes occur every 20 minutes on the nose, with the quakes
              becoming more aggressive the longer non-Kermen individuals remain in
              the area.McGrackle the Dissembler advises the team extreme caution
              in regards to this phenomenon.`,
            },
            {
              text: `OBS! Detta scanerio kommer att köras med Tournament regler, det
              kommer vara ganska dödligt och det kommer vara poängsättning på
              spelarnas val och den som samlat på sig flest poäng i slutet av
              scenariot vinner äran samt ett litet hemligt pris.`,
              class: 'italic',
            },
          ],
          type: BlockComponentType.TextBlock,
        } as TextBlockInterface,
      ],
      information: [
        {
          header: 'White Box',
          dm: 'Tobias Tarnvik-Laesker',
          slot: '1 [11 - 15]',
          players: '5',
          language: 'Svenska',
          type: BlockComponentType.ArrangementInfoBlock,
        } as ArrangementInfoBlockInterface,
      ],
      outerClass: 'mt-7',
      type: BlockComponentType.ArrangementBlock,
    } as ArrangementBlockInterface,
    // ------------------------------------------------------------------------------------------
    // Land of Ronin
    // ------------------------------------------------------------------------------------------
    {
      header: 'Land of Ronin',
      body: [
        {
          body: [
            {
              text: 'I ena ändan av det stora slagfältet står fortfarande en av de stora stridsrobotarna på knä likt en samuraj som skall begå seppuku. Som ett berg drar den åt sig väder och vindar. Från den lilla byn kan byborna se robotens demoniska hannya mask lysas upp av blixtarna medan mullret rullar över fälten likt forna tiders strider.',
            },
            {
              text: 'Enligt rykten skall roboten fortfarande innehålla åtråvärda tekniker som blivit bortglömda. Speciellt kommandobryggan i dess skalle skall vara orörd av plundrare och innehålla skatter värda en förmögenhet på svartmarknaden.',
            },
            {
              text: 'Men många faror lurar på vägen till rikedomen. Att ta sig till kommandobryggan är bara något de allra tappraste/dumdristigaste vågar sig på och alla har kommit tillbaka tomhänta, eller inte alls. Drivna av hunger, äventyrslust, uttråkning, övermod eller bara dödslängtan, så ger er brokiga samling i väg för att prova lyckan.',
            },
          ],
          type: BlockComponentType.TextBlock,
        } as TextBlockInterface,
      ],
      information: [
        {
          header: 'Kanabo',
          dm: 'Jörgen bengtsson',
          slot: 'Pass 1 [11 - 15]',
          players: '3-5',
          language: 'Svenska',
          age: '12+',
          type: BlockComponentType.ArrangementInfoBlock,
        } as ArrangementInfoBlockInterface,
      ],
      outerClass: 'mt-8',
      type: BlockComponentType.ArrangementBlock,
    } as ArrangementBlockInterface,
    // ------------------------------------------------------------------------------------------
    // The Ghost Tower of Inverness
    // ------------------------------------------------------------------------------------------
    {
      header: 'The Ghost Tower of Inverness',
      body: [
        {
          body: [
            {
              text: 'Länge har ni suttit fångna i Hertig Justinian Lorinar av Urnsts fängelsehålor. Men nu har ni blivit kallade till hans sal för att bli skickade på ett uppdrag mot eran frihet. Hämta Själastenen från den gamla övergivna fästningen Inverness och ni blir frikända från era brott mot kronan.',
            },
            {
              text: 'The Ghost Tower of Inverness är en äventyrsmodul till AD&D som spelades först på Wintercon VIII i Detroit 1979 skrivet av Allen Hammack, den sägs vara skriven för “erfarna” spelare vilket betyder att den har en hel del kluriga pussel snarare än tuffa strider OBS detta är inget krav, men gillar du inte pussel är detta kanske inte något för dig. Vi kommer köra med höglevlade karaktärer (level 6-10) och vi kommer använda oss av turneringsvarianten som är något modifierad men vi kommer inte räkna poäng och Swords & Wizardry Complete som regelsystem.',
            },
            {
              text: 'Swords & Wizardry Complete är en modifierad retroklon av OD&D med alla supplement. Den bästa liknelsen tycker jag är en light variant på AD&D.',
            },
          ],
          type: BlockComponentType.TextBlock,
        } as TextBlockInterface,
        {
          image: 'http://wcosr.se/images/ghost-tower-of-inverness.png',
          alt: 'KC SL Back',
          caption: '',
          outerClass: 'w-3/4',
          type: BlockComponentType.ImageBlock,
        } as ImageBlockInterface,
      ],
      information: [
        {
          header: 'Swords & Wizardry Complete',
          dm: 'Tobias Tarnvik-Laeske',
          slot: '1 [11 - 15]',
          players: '2-5',
          language: 'Svenska',
          age: '15+',
          type: BlockComponentType.ArrangementInfoBlock,
        } as ArrangementInfoBlockInterface,
      ],
      outerClass: 'mt-8',
      type: BlockComponentType.ArrangementBlock,
    } as ArrangementBlockInterface,
    // ------------------------------------------------------------------------------------------
    // Escape from the Organ Rail
    // ------------------------------------------------------------------------------------------
    {
      header: 'Escape from the Organ Rail',
      body: [
        {
          body: [
            {
              text: 'Y’all are chained up onboard the Organ Rail, a prison train clad in black iron ‘n’ spewing blood-red smoke as it rattles across the tracks of the endless desert. Legends say the belly-vault contains the confiscated loot of a thousand robberies gone wrong. Now, that’s a lot o’ silver, but y’all’ve got more pressing matters: next stop is New Schleswig, where they’ve got nooses embroidered with your names on ‘em.',
            },
            {
              text: 'If y’all wanna survive, break out fast and with enough supplies to get across the sweltering sands to Onda Oas; no straight-shootin’ lawfolk would set foot in that veritable rat’s nest of thieves and outlaws. Yup, that there’s your only chance, pardners. Then again, it couldn’t hurt to have a look-see in that vault while y’all are here... could it?',
            },
          ],
          type: BlockComponentType.TextBlock,
        } as TextBlockInterface,
      ],
      information: [
        {
          header: 'Frontier Scum (A MÖRK BORG Hack)',
          dm: 'Karl Druid',
          slot: 'Pass 1 [11 - 15]',
          players: '4',
          language: 'English',
          age: '18+',
          type: BlockComponentType.ArrangementInfoBlock,
        } as ArrangementInfoBlockInterface,
      ],
      outerClass: 'mt-8',
      type: BlockComponentType.ArrangementBlock,
    } as ArrangementBlockInterface,
    // ------------------------------------------------------------------------------------------
    // Sjöjungfruns erbjudande
    // ------------------------------------------------------------------------------------------
    {
      header: 'Sjöjungfruns erbjudande',
      body: [
        {
          body: [
            {
              text: 'En sjöjungfru ger ett erbjudande om stora rikedomar i utbyte mot lokal grottsniglar. Är detta en lätt förtjänt rikedom eller tar man sig vatten över huvudet då man accepterar det?',
            },
          ],
          type: BlockComponentType.TextBlock,
        } as TextBlockInterface,
      ],
      information: [
        {
          header: 'Swords & Wizardry',
          dm: 'Hannes Svanström',
          slot: '1 [11 - 15] & 2 [16 - 20]',
          players: '3-5',
          language: 'Svenska (engelska fungerar)',
          age: '-',
          type: BlockComponentType.ArrangementInfoBlock,
        } as ArrangementInfoBlockInterface,
      ],
      outerClass: 'mt-8',
      type: BlockComponentType.ArrangementBlock,
    } as ArrangementBlockInterface,
    // ------------------------------------------------------------------------------------------
    // Transmissions From the Lake
    // ------------------------------------------------------------------------------------------
    {
      header: 'Transmissions From the Lake',
      body: [
        {
          body: [
            {
              text: 'In a faraway future when space travel has become a rather common phenomenon, groups of people surveilling the trafficked space in order to see to that the rules are followed have become just as common. You and your crew constitute one of those groups who patrol the interstellar backwaters between the red dwarf stars Lalande 21185 and Ross 128. This is an area in space that has been abandoned by all of the major organisations, corporations, and even traders and the only reason why you are here is to make sure that the planets of these two stars do not become sites of illegal businesses. As far as you are concerned, however, it is all a waste of time as years have passed since any craft even passed through any of the red dwarf systems and therefore you are all quite surprised when your communications officer suddenly picks up a signal from the planet known as Ross 128 b. It is a recorded message that according to the communications officer is transmitted over and over again from the planet. Unfortunately, almost all of the message is scrambled and no matter how he tries to clear up the sound, all that you hear is the ominous last part:',
            },
            {
              text: '“If you hear this… should anyone ever hear this, never even come near Ross 128 b. We will try to survive for as long as we can and we will try to find out what is going on here but do not ever come here! Finally, I am at my senses again. This is Dr Isadora Ortega  signing off, for the very last time.”',
            },
            {
              text: 'In spite of the warning and the unknown reason behind it, it does not take you more than a few seconds to decide that this is something that needs to be investigated further. You do not know what you will find on Ross 128 b and you are pretty sure that it will not be anything good but being completely bored out of your gourd you still all agree that at least finding the origins of the message is the only sensible thing to do.',
            },
          ],
          type: BlockComponentType.TextBlock,
        } as TextBlockInterface,
        {
          image: 'http://wcosr.se/images/space-station.png',
          alt: 'KC SL Back',
          caption: '',
          outerClass: 'w-3/4',
          type: BlockComponentType.ImageBlock,
        } as ImageBlockInterface,
      ],
      information: [
        {
          header: 'Mothership',
          dm: 'Katja Lindblom',
          slot: 'Pass 2 [16 - 20]',
          players: '2-5',
          language: 'Svenska (engelska vid behov)',
          age: '12+',
          type: BlockComponentType.ArrangementInfoBlock,
        } as ArrangementInfoBlockInterface,
      ],
      outerClass: 'mt-8',
      type: BlockComponentType.ArrangementBlock,
    } as ArrangementBlockInterface,
    // ------------------------------------------------------------------------------------------
    // Dr. Scholtz, I presume?
    // ------------------------------------------------------------------------------------------
    {
      header: 'Dr. Scholtz, I presume?',
      body: [
        {
          body: [
            {
              text: 'New York, 2021.',
            },
            {
              text: `Ni bröt er in här på jakt efter Dr. Scholtz, en ökänd svartkonstnär i den ockulta undre världen.
                Rykten på olika subreddits sa att han hade kommit över en kraftfull artefakt och detta kunde vara er chans
                att stiga uppåt i graderna och slippa förnedra er som springsjasar åt up-and-coming alkemister och kaosmagiker
                längre.`,
            },
            {
              text: `Nu står ni här i hans trailer och stirrar på ett svart hål och en rostig stege som leder ned i mörkret.
                Ni har bränt både broar och resurser för att ens hitta denna gudsförgätna plats, längst in på ett övergivet
                skrotupplag nere vid vattnet.`,
            },
            {
              text: `Någonstans där nerifrån hörs ett omänskligt avgrundsvrål och en skämd lukt fyller era näsborrar
                med tvivel.`,
            },
            {
              text: '-----------------------------------------------------',
            },
            {
              text: 'Ett grottkräl i New Yorks ockulta underjord!',
            },
          ],
          type: BlockComponentType.TextBlock,
        } as TextBlockInterface,
      ],
      information: [
        {
          header: 'Svärd & Svartkonst (moddat för nutid)',
          dm: 'Markus Linderum',
          slot: '2 [16 - 20]',
          players: '3-6',
          language: 'Svenska',
          age: '12+',
          type: BlockComponentType.ArrangementInfoBlock,
        } as ArrangementInfoBlockInterface,
      ],
      outerClass: 'mt-8',
      type: BlockComponentType.ArrangementBlock,
    } as ArrangementBlockInterface,
    // ------------------------------------------------------------------------------------------
    // Escape From Innsmouth
    // ------------------------------------------------------------------------------------------
    {
      header: 'Escape From Innsmouth',
      body: [
        {
          body: [
            {
              text: "You and your fellow townsfolk have faithfully followed Dagon, Lord of the Deep for centuries. Praying to the old one has given many benefits. You never go hungry as Dagon keeps your nets full with the ocean's bounty.",
            },
            {
              text: 'Immortality also awaits for the favoured, the privilege to spend eternity amongst your Brothers and Sisters in the depths.',
            },
            {
              text: 'You and a small group of faithful are now on the cusp of finally being ready to cast aside your human shells and make the swim to join your true family.',
            },
            {
              text: 'Unfortunately, one too many of the neighboring villagers have gone missing recently due to your sacrificial rituals, and their fellows have taken to arms.',
            },
            {
              text: 'Finishing your prayers, you realise villagers from two neighboring communities have stormed the area with the intent of killing you and all those who kneel to your gilled savior.',
            },
            {
              text: 'Your only means of escape is to make it to the shores of Innsmouth, where you can find safety amongst your siblings in the dark depths.',
            },
          ],
          type: BlockComponentType.TextBlock,
        } as TextBlockInterface,
      ],
      information: [
        {
          header: 'Dungeon Crawl Classics',
          dm: 'Simon Sultan',
          slot: 'Pass 2 [16 - 20]',
          players: '3-6',
          language: 'Svengelska',
          age: '12+',
          type: BlockComponentType.ArrangementInfoBlock,
        } as ArrangementInfoBlockInterface,
      ],
      outerClass: 'mt-8',
      type: BlockComponentType.ArrangementBlock,
    } as ArrangementBlockInterface,
  ],
};

export default kryptCon5;
