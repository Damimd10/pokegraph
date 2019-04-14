import getPokeApi, {
  IExtraParams,
  IPaginationParams,
} from '../shared/service/api';
import IContest from '../models/IBerryFlavor';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'contest-type';

const getContest = getPokeApi(endpoint);

export const getAll = async (offset: number, limit: number) =>
  await getContest<IPaginationParams, IAPIResourceList>({
    offset,
    limit,
  });

export const getContestById = async (id: number | string) => {
  const getById = getPokeApi(`${endpoint}/${id}`);
  return await getById<IExtraParams, IContest>({ id });
};
