import IName from './IName';

export default interface IEncounterMethod {
  id: number;
  name: string;
  order: number;
  names: IName[];
}
