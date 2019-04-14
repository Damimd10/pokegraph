import getPokeApi, {
  IExtraParams,
  IPaginationParams,
} from '../shared/service/api';
import IContest from '../models/IBerryFlavor';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'contest-type';

const getContest = getPokeApi(endpoint);

export const getAll = async (
  offset: number,
  limit: number
): Promise<IContest[]> => {
  const { results } = await getContest<IPaginationParams, IAPIResourceList>({
    offset,
    limit,
  });

  const mappedPromises = results.map(
    async ({ name }) => await getContestById(name)
  );

  return await Promise.all(mappedPromises);
};

export const getContestById = async (
  id: number | string
): Promise<IContest> => {
  const getById = getPokeApi(`${endpoint}/${id}`);
  return await getById<IExtraParams, IContest>({ id });
};
