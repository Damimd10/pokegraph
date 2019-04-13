import INamedAPIResource from './INamedAPIResource';
import IName from './IName';

export default interface IBerryFlavor {
  id: number;
  name: string;
  berries: IFlavorBerryMap[];
  contest_type: INamedAPIResource;
  names: IName[];
}

interface IFlavorBerryMap {
  potency: number;
  berry: INamedAPIResource;
}
