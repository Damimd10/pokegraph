import getPokeApi, {
  IExtraParams,
  IPaginationParams,
} from '../shared/service/api';
import ISuperContestEffect from '../models/ISuperContestEffect';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'super-contest-effect';

const getSuperContestEffect = getPokeApi(endpoint);

export const getAll = async (
  offset: number,
  limit: number
): Promise<ISuperContestEffect[]> => {
  const { results } = await getSuperContestEffect<
    IPaginationParams,
    IAPIResourceList
  >({
    offset,
    limit,
  });

  const mappedPromises = results.map(async (_, i) => {
    try {
      return await getSuperContestEffectById(i + 1);
    } catch (error) {
      throw new Error('Bestia!!');
    }
  });

  return await Promise.all(mappedPromises);
};

export const getSuperContestEffectById = async (
  id: number | string
): Promise<ISuperContestEffect> => {
  const getById = getPokeApi(`${endpoint}/${id}`);
  return await getById<IExtraParams, ISuperContestEffect>({ id });
};
