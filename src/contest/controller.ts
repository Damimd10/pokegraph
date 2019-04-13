import getPokeApi, {
  IExtraParams,
  IPaginationParams,
} from '../shared/service/api';
import IContest from '../models/IBerryFlavor';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'berry-flavor';

const getBerryFirmness = getPokeApi(endpoint);

export const getAll = async (offset: number, limit: number) =>
  await getBerryFirmness<IPaginationParams, IAPIResourceList>({
    offset,
    limit,
  });

export const getContestById = async (id: number | string) => {
  const getById = getPokeApi(`${endpoint}/${id}`);
  return await getById<IExtraParams, IContest>({ id });
};
