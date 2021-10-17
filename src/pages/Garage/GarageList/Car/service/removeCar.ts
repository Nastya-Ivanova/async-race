import { deleteRecord } from 'API/api';
import { Paths } from 'type';

export const removeCar = async (id: number): Promise<void> => {
  await deleteRecord(Paths.garage, id);
  await deleteRecord(Paths.winners, id);
};
