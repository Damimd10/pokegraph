import INamedAPIResource from './INamedAPIResource';
import IName from './IName';

export default interface IGeneration {
  id: number;
  name: string;
  abilities: INamedAPIResource[];
  names: IName[];
  main_region: INamedAPIResource;
  moves: INamedAPIResource[];
  pokemon_species: INamedAPIResource[];
  types: INamedAPIResource[];
  version_groups: INamedAPIResource[];
}
