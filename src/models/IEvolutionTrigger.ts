import IName from './IName';
import INamedAPIResource from './INamedAPIResource';

export default interface IEvolutionTrigger {
  id: number;
  name: string;
  names: IName[];
  pokemon_species: INamedAPIResource[];
}
