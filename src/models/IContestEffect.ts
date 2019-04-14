import INamedAPIResource from './INamedAPIResource';

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

interface IFlavorText {
  flavor_text: string;
  language: INamedAPIResource;
  version: INamedAPIResource;
}
