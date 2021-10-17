import { updateRecord } from 'API/api';
import { store } from 'store';
import { Paths } from 'type';

export const updateCar = async (): Promise<void> => {
  await updateRecord(Paths.garage, store.selectCarId, {
    name: `${store.selectName}`,
    color: `${store.selectColor}`,
  });
};
