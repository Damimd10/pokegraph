import { getAll, getBerryFlavorById } from './controller';

export default {
  Query: {
    getAllBerryFlavor: (_, { offset = 0, limit = 20 }) => getAll(offset, limit),
    getBerryFlavorById: (_, { id }) => getBerryFlavorById(id),
  },
};
