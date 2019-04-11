import axios from 'axios';
import { camelKeys } from 'js-convert-case';

const baseUrl = 'https://pokeapi.co/api/v2/';
const testUrl = 'berry';

module.exports = {
  Query: {
    berries(_, { id }) {
      return axios.get(`${baseUrl}${testUrl}/${id}`).then(res => {
        return camelKeys(res.data);
      });
    },
  },
};
