import Service from '../shared/service/Service';
import { IExtraParams, IPaginationParams } from '../shared/service/api';
import IContestEffect from '../models/IContestEffect';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'contest-effect';

const service = new Service(endpoint);

export default {
  Query: {
    getAllContestEffects: (_, { offset = 0, limit = 20 }) =>
      service.getAllResources<
        IPaginationParams,
        IAPIResourceList,
        IContestEffect[]
      >(offset, limit),
    getContestEffects: (_, { id }) =>
      service.getResourceById<IExtraParams, IContestEffect>(id),
  },
};
