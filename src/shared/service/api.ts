import axios, { AxiosResponse } from 'axios';
import { camelKeys } from 'js-convert-case';
import { compose, prop } from 'ramda';

export type IPaginationParams = {
  offset: number;
  limit: number;
};

export type IExtraParams = {
  id: number | string;
};

type IService = (
  url: string
) => (endpoint: string) => <T, K>(params?: T) => Promise<K>;

const getFromAPI: IService = baseURL => endpoint => params =>
  axios.get(`${baseURL}${endpoint}`, { params }).then(
    compose(
      camelKeys,
      prop('data')
    )
  );

const getPokeApi = getFromAPI('https://pokeapi.co/api/v2/');

export default getPokeApi;
