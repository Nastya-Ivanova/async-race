import { createRecord } from 'API/api';
import { Car, Paths, Winner } from 'type';

export const createWinner = async (id: number, time: number): Promise<Winner | Car> =>
  createRecord(Paths.winners, { id, wins: 1, time: `${time / 1000}` });
