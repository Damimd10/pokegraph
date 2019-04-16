import Service from '../shared/service/Service';
import { IExtraParams, IPaginationParams } from '../shared/service/api';
import IBerryFlavor from '../models/IBerryFlavor';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'berry-flavor';
const service = new Service(endpoint);

export default {
  Query: {
    getAllBerryFlavor: (_, { offset = 0, limit = 20 }) =>
      service.getAllResources<
        IPaginationParams,
        IAPIResourceList,
        IBerryFlavor[]
      >(offset, limit),
    getBerryFlavor: (_, { id }) =>
      service.getResourceById<IExtraParams, IBerryFlavor>(id),
  },
};
