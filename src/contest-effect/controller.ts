import getPokeApi, {
  IExtraParams,
  IPaginationParams,
} from '../shared/service/api';
import IContestEffect from '../models/IContestEffect';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'contest-effect';

const getContestEffect = getPokeApi(endpoint);

export const getAll = async (offset: number, limit: number) =>
  await getContestEffect<IPaginationParams, IAPIResourceList>({
    offset,
    limit,
  });

export const getContestEffectById = async (id: number | string) => {
  const getById = getPokeApi(`${endpoint}/${id}`);
  return await getById<IExtraParams, IContestEffect>({ id });
};
