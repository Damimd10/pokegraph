import { getAll, getBerryFirmnessById } from './controller';

export default {
  Query: {
    getAllBerryFirmness: (_, { offset = 0, limit = 20 }) =>
      getAll(offset, limit),
    getBerryFirmness: (_, { id }) => getBerryFirmnessById(id),
  },
};
