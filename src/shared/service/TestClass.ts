import getPokeApi from './api';

export default class TestClass {
  endpoint: string;

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAllResources() {}

  async getResourceById<K, T>(id: number | string): Promise<T> {
    const getById = getPokeApi(`${this.endpoint}/${id}`);
    try {
      return await getById<K, T>();
    } catch (error) {
      console.log('HERE', error);
    }
  }
}
