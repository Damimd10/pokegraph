import getPokeApi from '../shared/service/api';
import IAPIResourceList from '../models/IAPIResourceList';
import IBerry from '../models/IBerry';

type IPaginationParams = {
  offset: number;
  limit: number;
};

type IParamId = {
  id: number | string;
};

const endpoint = 'berry';

const getBerries = getPokeApi(endpoint);

export const getAll = async (offset: number, limit: number) =>
  await getBerries<IPaginationParams, IAPIResourceList>({ offset, limit });

export const getBerryById = async (id: number | string) => {
  const getById = getPokeApi(`${endpoint}/${id}`);
  return await getById<IParamId, IBerry>({ id });
};
