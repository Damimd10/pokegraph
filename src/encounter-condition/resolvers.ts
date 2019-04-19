import Service from '../shared/service/Service';
import { IExtraParams, IPaginationParams } from '../shared/service/api';
import IEncounterCondition from '../models/IEncounterCondition';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'encounter-condition';

const service = new Service(endpoint);

export default {
  Query: {
    getAllEncounterConditions: (_, { offset = 0, limit = 20 }) =>
      service.getAllResources<
        IPaginationParams,
        IAPIResourceList,
        IEncounterCondition[]
      >(offset, limit),
    getEncounterCondition: (_, { id }) =>
      service.getResourceById<IExtraParams, IEncounterCondition>(id),
  },
};
