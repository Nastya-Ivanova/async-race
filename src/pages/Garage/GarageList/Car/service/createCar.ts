import { createRecord } from 'API/api';
import { NewCar, Paths } from 'type';

export const createCar = async (crtCar: NewCar): Promise<void> => {
  await createRecord(Paths.garage, { name: `${crtCar.name}`, color: `${crtCar.color}` });
};
