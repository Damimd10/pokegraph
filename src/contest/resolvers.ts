import { getAll, getContestById } from './controller';

export default {
  Query: {
    getAllContest: (_, { offset = 0, limit = 20 }) => getAll(offset, limit),
    getContest: (_, { id }) => getContestById(id),
  },
};
