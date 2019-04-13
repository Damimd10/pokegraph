import { getAll, getBerryById } from './controller';

export default {
  Query: {
    getAllBerries(_, { offset = 0, limit = 20 }) {
      return getAll(offset, limit);
    },
    getBerry(_, { id }) {
      return getBerryById(id);
    },
  },
};
