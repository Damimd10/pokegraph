import getPokeApi from '../shared/service/api';
import IBerry from '../models/IBerry';
import INamedAPIResource from '../models/INamedAPIResource';

type IPaginationParams = {
  offset: number;
  limit: number;
};

type IParamId = {
  id: number | string;
};

const getBerries = getPokeApi('berry');

export const getAll = async (offset: number, limit: number) =>
  await getBerries<IPaginationParams, INamedAPIResource>({
    offset,
    limit,
  });

export const getBerryById = async (id: number | string) =>
  await getBerries<IParamId, IBerry>({ id });
