import Service from '../shared/service/Service';
import { IExtraParams, IPaginationParams } from '../shared/service/api';
import IEvolutionChain from '../models/IEvolutionChain';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'evolution-chain';

const service = new Service(endpoint);

export default {
  Query: {
    getAllEvolutionChains: (_, { offset = 0, limit = 20 }) =>
      service.getAllResources<
        IPaginationParams,
        IAPIResourceList,
        IEvolutionChain[]
      >(offset, limit),
    getEvolutionChain: (_, { id }) =>
      service.getResourceById<IExtraParams, IEvolutionChain>(id),
  },
};
