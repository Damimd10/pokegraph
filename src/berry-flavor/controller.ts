import getPokeApi, {
  IExtraParams,
  IPaginationParams,
} from '../shared/service/api';
import IBerryFlavor from '../models/IBerryFlavor';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'berry-flavor';

const getBerryFirmness = getPokeApi(endpoint);

export const getAll = async (
  offset: number,
  limit: number
): Promise<IBerryFlavor[]> => {
  const { results } = await getBerryFirmness<
    IPaginationParams,
    IAPIResourceList
  >({
    offset,
    limit,
  });

  const mappedPromises = results.map(
    async ({ name }) => await getBerryFlavorById(name)
  );

  return await Promise.all(mappedPromises);
};

export const getBerryFlavorById = async (
  id: number | string
): Promise<IBerryFlavor> => {
  const getById = getPokeApi(`${endpoint}/${id}`);
  return await getById<IExtraParams, IBerryFlavor>({ id });
};
