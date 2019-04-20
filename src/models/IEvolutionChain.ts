import INamedAPIResource from './INamedAPIResource';

export default interface IEvolutionChain {
  id: number;
  baby_trigger_item: INamedAPIResource[];
  chain: IChainLink;
}

interface IChainLink {
  is_baby: boolean;
  species: INamedAPIResource;
  evolution_details: IEvolutionDetail[];
  evolves_to: IChainLink[];
}

interface IEvolutionDetail {
  item: INamedAPIResource;
  trigger: INamedAPIResource;
  gender: number;
  held_item: INamedAPIResource;
  known_move: INamedAPIResource;
  known_move_type: INamedAPIResource;
  location: INamedAPIResource;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: INamedAPIResource;
  party_type: INamedAPIResource;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: INamedAPIResource;
  turn_upside_down: boolean;
}
