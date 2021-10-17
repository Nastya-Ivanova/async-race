import { getRecord } from 'API/api';
import { Car, Paths } from 'type';

export const findCarMatchingToWinner = async (id: number): Promise<Car> =>
  getRecord(Paths.garage, id);
