import INamedAPIResource from './INamedAPIResource';
import IFlavorText from './IFlavorText';

export default interface IContestEffect {
  id: number;
  appeal: number;
  jam: number;
  effect_entries: IEffect[];
  flavor_text_entries: IFlavorText[];
}

interface IEffect {
  effect: string;
  language: INamedAPIResource;
}
