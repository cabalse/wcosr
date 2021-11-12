import { LinkBlockInterface } from '../components/block/LinkBlock';
import { TextBlockInterface } from '../components/block/TextBlock';
import BlockComponentType from '../types/BlockComponentType';
import { PageContentInterface } from '../types/PageContentInterface';

const whatIsOsr: PageContentInterface = {
  content: [
    {
      header: 'Vad är då OSR?',
      body: [{
        text: `OSR står för Old School Renaissance eller Old School Revival, och det innebär en spelstil
        som tar avstamp i, och söker emulera hur man spelade rollspel på 70- och 80-talet och då i synnerhet
        de första Dungeons & Dragons utgåvorna.`,
        class: '',
      },
      {
        text: `Definitioner av OSR kan såklart variera men vi tar oss rätten att definiera vad spelstilen
        innebär för oss, samt vilka spel vi anser stödjer detta. Läs också gärna dokumenten vi länkat till
        här nedan.`,
        class: '',
      },
      {
        text: `I ett OSR-spel brukar man oftast slumpa fram rollpersonens grundegenskaper istället för t.ex.
        point buy system som bidrar till balans. Det brukar oftast gå ut på att upptäcka miljöer, leta igenom
        grottor och katakomber för att samla så mycket skatter som det bara går, istället för att följa en
        färdigskriven story. Din karaktär är ingen förutbestämd hjälte som ska rädda världen utan en helt vanlig
        knegare som försöker överleva i en farlig värld.`,
        class: '',
      },
      {
        text: `Det existerar ingen spelbalans i världen. Spelledaren kommer inte presentera monster och
        utmaningar som du statistiskt sett ska kunna besegra utan det är upp till spelarna att observera,
        övervaka och undersöka för att skapa sig fördelar i en strid. Det är smartare att förgifta goblinernas
        matförråd än att möta dem i öppen strid.`,
        class: '',
      },
      {
        text: `Reglerna brukar vara ganska sparsmakade gentemot nya Dungeons & Dragons utgåvor, och man
        säger ofta "Rulings, not rules" när det ska bedömas i spelen. Spelarna beskriver vad de vill göra
        och spelledaren avgör vad som är en rimlig utgång och om det finns slump inblandat kan man få rulla
        en tärning.`,
        class: '',
      },
      {
        text: `En annan fras som ofta kopplas till OSR är också "Player skill, not character skill" vilket
        innebär att man oftast inte har en massa skills eller abilities som hjälper dig att överkomma svårigheter
        utan man får försöka improvisera sig fram genom att till exempel interagera med omgivningen och samarbeta.
        Istället för att kolla igenom ditt rollformulär och hitta en lämplig färdighet är frågor till spelledaren
        ditt främsta vapen. Gränsen mellan karaktären och spelaren är därmed inte så tydlig som den är i andra rollspel.`,
        class: '',
      },
      {
        text: `Den som vill förkovra sig ytterligare i spelstilen kan läsa följande dokument som går igenom
        spelstilen på ett bra sätt.`,
        class: '',
      }],
      type: BlockComponentType.TextBlock,
    } as TextBlockInterface,
    {
      linkText: 'A Quick Primer for Old School Gaming',
      externalUrl: 'https://friendorfoe.com/d/Old%20School%20Primer.pdf',
      type: BlockComponentType.LinkBlock,
    } as LinkBlockInterface,
    {
      linkText: 'Lithyscaphe: Principles of Old School RPGs, or, A New OSR Primer',
      externalUrl: 'https://lithyscaphe.blogspot.com/p/principia-apocrypha.html',
      type: BlockComponentType.LinkBlock,
    } as LinkBlockInterface,
  ],
};

export default whatIsOsr;
