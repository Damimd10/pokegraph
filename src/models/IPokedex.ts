import IDescription from './IDescription';
import IName from './IName';
import INamedAPIResource from './INamedAPIResource';

export default interface IPokedex {
  id: number;
  name: string;
  is_main_series: boolean;
  descriptions: IDescription[];
  names: IName[];
  pokemon_entries: IPokemonEntry[];
  region: INamedAPIResource;
  version_groups: INamedAPIResource[];
}

interface IPokemonEntry {
  entry_number: number;
  pokemon_species: INamedAPIResource;
}
