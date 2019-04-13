import INamedAPIResource from './INamedAPIResource';

export default interface IAPIResourceList {
  count: number;
  next: string;
  previous: string;
  results: [INamedAPIResource];
}
