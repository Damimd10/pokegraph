import INamedAPIResource from './INamedAPIResource';

export default interface IBerry {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: INamedAPIResource;
  flavors: IBerryFlavorMap[];
  item: INamedAPIResource;
  natural_gift_type: INamedAPIResource;
}

interface IBerryFlavorMap {
  potency: number;
  flavor: INamedAPIResource;
}
