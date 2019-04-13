import getPokeApi from '../shared/service/api';
import IBerryFirmness from '../models/IBerryFirmness';
import IAPIResourceList from '../models/IAPIResourceList';

type IPaginationParams = {
  offset: number;
  limit: number;
};

type IParamId = {
  id: number | string;
};

const endpoint = 'berry-firmness';

const getBerryFirmness = getPokeApi(endpoint);

export const getAll = async (offset: number, limit: number) =>
  await getBerryFirmness<IPaginationParams, IAPIResourceList>({
    offset,
    limit,
  });

export const getBerryFirmnessById = async (id: number | string) => {
  const getById = getPokeApi(`${endpoint}/${id}`);
  return await getById<IParamId, IBerryFirmness>({ id });
};
