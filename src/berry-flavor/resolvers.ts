import { getAll, getBerryFlavorById } from './controller';

export default {
  Query: {
    getAllBerryFlavor(_, { offset = 0, limit = 20 }) {
      return getAll(offset, limit);
    },
    getBerryFlavor(_, { id }) {
      return getBerryFlavorById(id);
    },
  },
};
