import INamedAPIResource from './INamedAPIResource';
import IFlavorText from './IFlavorText';

export default interface ISuperContestEffect {
  id: number;
  appeal: number;
  flavor_text_entries: IFlavorText[];
  moves: INamedAPIResource[];
}
