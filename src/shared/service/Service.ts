import getPokeApi from './api';

export default class Service {
  endpoint: string;

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async getAllResources<K, T, U>(offset: number, limit: number): Promise<U[]> {
    const getResource = getPokeApi(this.endpoint);
    const { results } = await getResource<any, any>({ offset, limit });

    const mappedPromises = results.map(async ({ name }) => {
      try {
        return await this.getResourceById(name);
      } catch (error) {
        return null; // Maybe a default object from the interface but within error property
      }
    });

    return await Promise.all(mappedPromises);
  }

  async getResourceById<K, T>(id: number | string): Promise<T> {
    const getById = getPokeApi(`${this.endpoint}/${id}`);
    try {
      return await getById<K, T>();
    } catch (error) {
      return null; // Maybe a default object from the interface but within error property
    }
  }
}
