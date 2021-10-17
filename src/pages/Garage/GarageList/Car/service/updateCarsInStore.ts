import { getAllRecords } from 'API/api';
import { setCarsAndCountCars, setStatusesCars, store } from 'store';
import { Car, Paths } from 'type';

export const updateCarsInStore = async (): Promise<void> => {
  const result = await getAllRecords(Paths.garage, { _page: store.carsPage, _limit: '7' });
  setCarsAndCountCars(result.records as Car[], result.totalCountOfRecords);
  setStatusesCars();
};
