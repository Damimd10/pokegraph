import INamedAPIResource from './INamedAPIResource';

export default interface IBerryFirmness {
  id: number;
  name: string;
  berries: [INamedAPIResource];
  names: [IName];
}

interface IName {
  name: string;
  language: [INamedAPIResource];
}
