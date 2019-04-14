import getPokeApi, {
  IPaginationParams,
  IExtraParams,
} from '../shared/service/api';
import IBerryFirmness from '../models/IBerryFirmness';
import IAPIResourceList from '../models/IAPIResourceList';
import TestClass from '../shared/service/TestClass';

const endpoint = 'berry-firmness';

const getBerryFirmness = getPokeApi(endpoint);

const Something = new TestClass(endpoint);

export const getAll = async (
  offset: number,
  limit: number
): Promise<IBerryFirmness[] | any> => {
  const { results } = await getBerryFirmness<
    IPaginationParams,
    IAPIResourceList
  >({ offset, limit });

  const mappedPromises = results.map(
    async ({ name }) => await getBerryFirmnessById(name)
  );

  return await Promise.all(mappedPromises);
};

export const getBerryFirmnessById = (id: number | string) => {
  return Something.getResourceById<IExtraParams, IBerryFirmness>(id);
};

/* export const getBerryFirmnessById = async (
  id: number | string
): Promise<IBerryFirmness> => {
  const getById = getPokeApi(`${endpoint}/${id}`);
  return await getById<IExtraParams, IBerryFirmness>({ id });
}; */
