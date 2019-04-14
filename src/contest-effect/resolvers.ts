import { getAll, getContestEffectById } from './controller';

export default {
  Query: {
    getAllContestEffects: (_, { offset = 0, limit = 20 }) =>
      getAll(offset, limit),
    getContestEffects: (_, { id }) => getContestEffectById(id),
  },
};
