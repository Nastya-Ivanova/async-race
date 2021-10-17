import { Car, StatusCar, Winner } from 'type';

type Store = {
  cars: Car[];
  countCars: number;
  carsPage: number;
  statusCars: StatusCar[];
  race: boolean;
  carWinner: boolean;
  winners: Winner[];
  countWinners: number;
  winnersPage: number;
  sortBy: string;
  sortOrder: string;
  selectCarId: number;
  selectName: string;
  selectColor: string;
};

export const store: Store = {
  cars: [],
  countCars: 0,
  carsPage: 1,
  statusCars: [],
  race: false,
  carWinner: true,
  winners: [],
  countWinners: 0,
  winnersPage: 1,
  sortBy: '',
  sortOrder: 'ASC',
  selectCarId: 0,
  selectName: '',
  selectColor: '',
};

export const setCarsAndCountCars = (cars: Car[], count: number): void => {
  store.cars = cars;
  store.countCars = count;
};

export const setNumberPage = <Page extends keyof Store>(key: Page, direction: string): void => {
  if (direction === 'prev') {
    (store[key] as number) -= 1;
  }

  if (direction === 'next') {
    (store[key] as number) += 1;
  }
};

export const startCar = (id: number): void => {
  const startedCar = store.statusCars.find((item) => item.id === id) as StatusCar;
  startedCar.status = 'started';
};

export const stopCar = (id: number): void => {
  const stoppedCar = store.statusCars.find((item) => item.id === id) as StatusCar;
  stoppedCar.status = 'stopped';
};

export const raceCars = (): void => {
  store.statusCars = store.statusCars.map((item) => ({
    ...item,
    status: 'started',
  }));
  store.race = true;
};

export const resetCars = (): void => {
  store.statusCars = store.statusCars.map((item) => ({
    ...item,
    status: 'stopped',
  }));

  store.carWinner = true;
};

export const setStatusesCars = (): void => {
  store.statusCars = store.cars.map((item) => ({
    ...item,
    status: 'stopped',
  }));
};

export const setRace = (value: boolean): void => {
  store.race = value;
};

export const setCarWinner = (value: boolean): void => {
  store.carWinner = value;
};

export const setWinnersAndCountWinners = (winners: Winner[], count: number): void => {
  store.winners = winners;
  store.countWinners = count;
};

export const setSortBy = (sortField: string): void => {
  store.sortBy = sortField;
};

export const setSortOrder = (sortType: string): void => {
  store.sortOrder = sortType;
};

export const setSelectCarId = (id: number): void => {
  store.selectCarId = id;
};

export const setSelectName = (name: string): void => {
  store.selectName = name;
};

export const setSelectColor = (color: string): void => {
  store.selectColor = color;
};
