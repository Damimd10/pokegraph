import Service from '../shared/service/Service';
import { IExtraParams, IPaginationParams } from '../shared/service/api';
import IEncounterConditionValue from '../models/IEncounterConditionValue';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'encounter-condition-value';

const service = new Service(endpoint);

export default {
  Query: {
    getAllEncounterConditionValues: (_, { offset = 0, limit = 20 }) =>
      service.getAllResources<
        IPaginationParams,
        IAPIResourceList,
        IEncounterConditionValue[]
      >(offset, limit),
    getEncounterConditionValue: (_, { id }) =>
      service.getResourceById<IExtraParams, IEncounterConditionValue>(id),
  },
};
