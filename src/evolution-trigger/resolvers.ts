import Service from '../shared/service/Service';
import { IExtraParams, IPaginationParams } from '../shared/service/api';
import IEvolutionTrigger from '../models/IEvolutionTrigger';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'evolution-trigger';

const service = new Service(endpoint);

export default {
  Query: {
    getAllEvolutionTriggers: (_, { offset = 0, limit = 20 }) =>
      service.getAllResources<
        IPaginationParams,
        IAPIResourceList,
        IEvolutionTrigger[]
      >(offset, limit),
    getEvolutionTrigger: (_, { id }) =>
      service.getResourceById<IExtraParams, IEvolutionTrigger>(id),
  },
};
