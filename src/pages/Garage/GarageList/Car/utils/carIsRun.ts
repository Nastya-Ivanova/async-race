import { StatusCar } from 'type';

export const carIsRun = (id: number, statusCars: StatusCar[]): StatusCar =>
  statusCars.find((item) => item.id === id) as StatusCar;
