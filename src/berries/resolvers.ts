import Service from '../shared/service/Service';
import { IExtraParams, IPaginationParams } from '../shared/service/api';
import IAPIResourceList from '../models/IAPIResourceList';
import IBerry from '../models/IBerry';

const endpoint = 'berry';

const service = new Service(endpoint);

export default {
  Query: {
    getAllBerries: (_, { offset = 0, limit = 20 }) =>
      service.getAllResources<IPaginationParams, IAPIResourceList, IBerry[]>(
        offset,
        limit
      ),
    getBerry: (_, { id }) => service.getResourceById<IExtraParams, IBerry>(id),
  },
};
