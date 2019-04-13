import getPokeApi from '../shared/service/api';
import IBerryFirmness from '../models/IBerryFirmness';
import INamedAPIResource from '../models/INamedAPIResource';

type IPaginationParams = {
  offset: number;
  limit: number;
};

type IParamId = {
  id: number | string;
};

const getBerryFirmness = getPokeApi('berry-firmness');

export const getAll = async (offset: number, limit: number) =>
  await getBerryFirmness<IPaginationParams, INamedAPIResource>({
    offset,
    limit,
  });

export const getBerryFirmnessById = async (id: number | string) =>
  await getBerryFirmness<IParamId, IBerryFirmness>({ id });
