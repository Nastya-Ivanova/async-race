import { updateRecord } from 'API/api';
import { Car, NewWinner, Paths } from 'type';

export const updateWinner = async (id: number, updWinner: NewWinner): Promise<Car> =>
  updateRecord(Paths.winners, id, updWinner);
