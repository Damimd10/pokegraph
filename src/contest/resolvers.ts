import Service from '../shared/service/Service';
import { IExtraParams, IPaginationParams } from '../shared/service/api';
import IContest from '../models/IBerryFlavor';
import IAPIResourceList from '../models/IAPIResourceList';

const endpoint = 'contest-type';

const service = new Service(endpoint);

export default {
  Query: {
    getAllContest: (_, { offset = 0, limit = 20 }) =>
      service.getAllResources<IPaginationParams, IAPIResourceList, IContest[]>(
        offset,
        limit
      ),
    getContest: (_, { id }) =>
      service.getResourceById<IExtraParams, IContest>(id),
  },
};
