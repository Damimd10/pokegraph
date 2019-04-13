import INamedAPIResource from './INamedAPIResource';

export default interface IContest {
  id: number;
  name: string;
  berry_flavor: INamedAPIResource;
  names: IContestName[];
}

interface IContestName {
  name: string;
  color: string;
  language: INamedAPIResource;
}
