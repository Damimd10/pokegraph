import Service from '../shared/service/Service';
import { IPaginationParams, IExtraParams } from '../shared/service/api';
import IAPIResourceList from '../models/IAPIResourceList';
import IBerryFirmness from '../models/IBerryFirmness';

const endpoint = 'berry-firmness';

const service = new Service(endpoint);

export default {
  Query: {
    getAllBerryFirmness: (_, { offset = 0, limit = 20 }) =>
      service.getAllResources<
        IPaginationParams,
        IAPIResourceList,
        IBerryFirmness[]
      >(offset, limit),
    getBerryFirmness: (_, { id }) =>
      service.getResourceById<IExtraParams, IBerryFirmness>(id),
  },
};
