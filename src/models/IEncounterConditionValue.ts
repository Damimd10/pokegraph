import INamedAPIResource from './INamedAPIResource';
import IName from './IName';

export default interface IEncounterConditionValue {
  id: number;
  name: string;
  condition: INamedAPIResource[];
  names: IName[];
}
