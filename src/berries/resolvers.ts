import { assoc, path, prop } from 'ramda';

import Service from '../shared/service/Service';
import { IExtraParams, IPaginationParams } from '../shared/service/api';

import IAPIResourceList from '../models/IAPIResourceList';
import IBerry from '../models/IBerry';
import IBerryFlavor from '../models/IBerryFlavor';

const endpoint = 'berry';
const flavorEndpoint = 'berry-flavor';

const service = new Service(endpoint);
const flavorService = new Service(flavorEndpoint);

const mappedFlavors = flavors =>
  flavors.map(async x => {
    const currentFlavor = path(['flavor', 'name'], x);
    const flavorResult = await flavorService.getResourceById<
      IExtraParams,
      IBerryFlavor
    >(currentFlavor);

    return assoc('flavor', flavorResult, x);
  });

export default {
  Query: {
    getAllBerries: (_, { offset = 0, limit = 20 }) =>
      service.getAllResources<IPaginationParams, IAPIResourceList, IBerry[]>(
        offset,
        limit
      ),
    getBerry: async (_, { id }) => {
      const result = await service.getResourceById<IExtraParams, IBerry>(id);
      const flavors = prop('flavors', result);

      return assoc('flavors', mappedFlavors(flavors), result);
    },
  },
};
