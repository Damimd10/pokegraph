import getPokeApi from '../shared/service/api';

type IPaginationParams = {
  offset: number;
  limit: number;
};

type IParamId = {
  id: number | string;
};

const getBerries = getPokeApi('berry');

export const getAll = async (offset: number, limit: number) =>
  await getBerries<IPaginationParams>({ offset, limit });

export const getBerryById = async (id: number | string) =>
  await getBerries<IParamId>({ id });
