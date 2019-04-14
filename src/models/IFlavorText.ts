import INamedAPIResource from './INamedAPIResource';

export default interface IFlavorText {
  flavor_text: string;
  language: INamedAPIResource;
  version: INamedAPIResource;
}
