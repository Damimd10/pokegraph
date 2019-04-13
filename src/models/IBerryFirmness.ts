import INamedAPIResource from './INamedAPIResource';
import IName from './IName';

export default interface IBerryFirmness {
  id: number;
  name: string;
  berries: [INamedAPIResource];
  names: [IName];
}
