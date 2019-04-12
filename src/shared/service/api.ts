import axios, { AxiosResponse } from 'axios';
import { camelKeys } from 'js-convert-case';
import { compose, prop } from 'ramda';

type IService = (
  url: string
) => (endpoint: string) => <T>(params: T) => Promise<AxiosResponse<any>>;

const getFromAPI: IService = baseURL => endpoint => params =>
  axios.get(`${baseURL}${endpoint}`, { params }).then(
    compose(
      camelKeys,
      prop('data')
    )
  );

const getPokeApi = getFromAPI('https://pokeapi.co/api/v2/');

export default getPokeApi;
