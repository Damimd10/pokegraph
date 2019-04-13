import { getAll, getBerryFirmnessById } from './controller';

export default {
  Query: {
    getAllBerryFirmness(_, { offset = 0, limit = 20 }) {
      return getAll(offset, limit);
    },
    getBerryFirmness(_, { id }) {
      return getBerryFirmnessById(id);
    },
  },
};
