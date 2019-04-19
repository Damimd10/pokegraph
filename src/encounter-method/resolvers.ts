import Service from '../shared/service/Service';
import { IExtraParams, IPaginationParams } from '../shared/service/api';
import IEncounterMethod from '../models/IEncounterMethod';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'encounter-method';

const service = new Service(endpoint);

export default {
  Query: {
    getAllEncounterMethods: (_, { offset = 0, limit = 20 }) =>
      service.getAllResources<
        IPaginationParams,
        IAPIResourceList,
        IEncounterMethod[]
      >(offset, limit),
    getEncounterMethod: (_, { id }) =>
      service.getResourceById<IExtraParams, IEncounterMethod>(id),
  },
};
