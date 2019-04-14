import getPokeApi, {
  IExtraParams,
  IPaginationParams,
} from '../shared/service/api';
import IAPIResourceList from '../models/IAPIResourceList';
import IBerry from '../models/IBerry';

const endpoint = 'berry';

const getBerries = getPokeApi(endpoint);

export const getAll = async (
  offset: number,
  limit: number
): Promise<IBerry[]> => {
  const { results } = await getBerries<IPaginationParams, IAPIResourceList>({
    offset,
    limit,
  });

  const mappedPromises = results.map(
    async ({ name }) => await getBerryById(name)
  );

  return await Promise.all(mappedPromises);
};

export const getBerryById = async (id: number | string) => {
  const getById = getPokeApi(`${endpoint}/${id}`);
  return await getById<IExtraParams, IBerry>({ id });
};
