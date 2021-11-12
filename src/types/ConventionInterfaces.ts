import { ConvetionSlotInterface } from '../components/block/ConventionSlotBlock';
import BlockInterface from './BlockInterface';

interface ConventionScheduleBlockInterface extends BlockInterface {
  header: string,
  date: string,
  location: string,
  slots: ConvetionSlotInterface[],
}

interface ConventionEventBlockInterface extends BlockInterface {
  header: string,
  body: string[],
  rules: string,
  gm: string,
  slot: ConvetionSlotInterface,
  players: number,
}

export type {
  ConvetionSlotInterface,
  ConventionScheduleBlockInterface,
  ConventionEventBlockInterface,
};
