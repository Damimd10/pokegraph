import Service from '../shared/service/Service';
import { IExtraParams, IPaginationParams } from '../shared/service/api';
import IPokedex from '../models/IPokedex';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'pokedex';

const service = new Service(endpoint);

export default {
  Query: {
    getAllPokedexes: (_, { offset = 0, limit = 20 }) =>
      service.getAllResources<IPaginationParams, IAPIResourceList, IPokedex[]>(
        offset,
        limit
      ),
    getPokedex: (_, { id }) =>
      service.getResourceById<IExtraParams, IPokedex>(id),
  },
};
