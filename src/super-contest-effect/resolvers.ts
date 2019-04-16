import Service from '../shared/service/Service';
import { IExtraParams, IPaginationParams } from '../shared/service/api';
import ISuperContestEffect from '../models/ISuperContestEffect';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'super-contest-effect';

const service = new Service(endpoint);

export default {
  Query: {
    getAllSuperContestEffect: (_, { offset = 0, limit = 20 }) =>
      service.getAllResources<
        IPaginationParams,
        IAPIResourceList,
        ISuperContestEffect[]
      >(offset, limit),
    getSuperContestEffect: (_, { id }) =>
      service.getResourceById<IExtraParams, ISuperContestEffect>(id),
  },
};
