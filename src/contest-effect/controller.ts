import getPokeApi, {
  IExtraParams,
  IPaginationParams,
} from '../shared/service/api';
import IContestEffect from '../models/IContestEffect';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'contest-effect';

const getContestEffect = getPokeApi(endpoint);

export const getAll = async (
  offset: number,
  limit: number
): Promise<IContestEffect[]> => {
  const { results } = await getContestEffect<
    IPaginationParams,
    IAPIResourceList
  >({
    offset,
    limit,
  });

  const mappedPromises = results.map(
    async ({ name }) => await getContestEffectById(name)
  );

  return await Promise.all(mappedPromises);
};

export const getContestEffectById = async (
  id: number | string
): Promise<IContestEffect> => {
  const getById = getPokeApi(`${endpoint}/${id}`);
  return await getById<IExtraParams, IContestEffect>({ id });
};
