import { getAll, getSuperContestEffectById } from './controller';

export default {
  Query: {
    getAllSuperContestEffect: (_, { offset = 0, limit = 20 }) =>
      getAll(offset, limit),
    getSuperContestEffect: (_, { id }) => getSuperContestEffectById(id),
  },
};
