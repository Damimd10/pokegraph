import Service from '../shared/service/Service';
import { IExtraParams, IPaginationParams } from '../shared/service/api';
import IVersion from '../models/IVersion';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'super-contest-effect';

const service = new Service(endpoint);

export default {
  Query: {
    getAllVersions: (_, { offset = 0, limit = 20 }) =>
      service.getAllResources<IPaginationParams, IAPIResourceList, IVersion[]>(
        offset,
        limit
      ),
    getVersion: (_, { id }) =>
      service.getResourceById<IExtraParams, IVersion>(id),
  },
};
