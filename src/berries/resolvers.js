const axios = require('axios');

const transformResponse = details => ({
  id: details.id,
  name: details.name,
});

const baseUrl = 'https://pokeapi.co/api/v2/';
const testUrl = 'berry';

module.exports = {
  Query: {
    berries(_, { id }) {
      return axios.get(`${baseUrl}${testUrl}/${id}`).then(res => {
        return transformResponse(res.data);
      });
    },
  },
};
