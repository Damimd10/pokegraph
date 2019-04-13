import getPokeApi, {
  IPaginationParams,
  IExtraParams,
} from '../shared/service/api';
import IBerryFirmness from '../models/IBerryFirmness';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'berry-firmness';

const getBerryFirmness = getPokeApi(endpoint);

export const getAll = async (offset: number, limit: number) =>
  await getBerryFirmness<IPaginationParams, IAPIResourceList>({
    offset,
    limit,
  });

export const getBerryFirmnessById = async (id: number | string) => {
  const getById = getPokeApi(`${endpoint}/${id}`);
  return await getById<IExtraParams, IBerryFirmness>({ id });
};
