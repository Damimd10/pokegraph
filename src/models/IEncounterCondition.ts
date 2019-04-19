import IName from './IName';
import INamedAPIResource from './INamedAPIResource';

export default interface IEncounterCondition {
  id: number;
  name: string;
  names: IName[];
  values: INamedAPIResource;
}
