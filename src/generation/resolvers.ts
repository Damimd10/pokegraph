import Service from '../shared/service/Service';
import { IExtraParams, IPaginationParams } from '../shared/service/api';
import IGeneration from '../models/IGeneration';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'generation';

const service = new Service(endpoint);

export default {
  Query: {
    getAllGenerations: (_, { offset = 0, limit = 20 }) =>
      service.getAllResources<
        IPaginationParams,
        IAPIResourceList,
        IGeneration[]
      >(offset, limit),
    getGeneration: (_, { id }) =>
      service.getResourceById<IExtraParams, IGeneration>(id),
  },
};
