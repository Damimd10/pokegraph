import IName from './IName';
import INamedAPIResource from './INamedAPIResource';

export default interface IVersion {
  id: number;
  name: string;
  names: IName[];
  version_group: INamedAPIResource;
}
