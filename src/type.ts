export enum Paths {
  garage = '/garage',
  winners = '/winners',
  engine = '/engine',
}

export type Car = {
  id: number;
  name: string;
  color: string;
};

export type NewCar = {
  name: string;
  color: string;
};

export type StatusCar = {
  id: number;
  status: string;
};

export type moveParamsCar = {
  velocity: number;
  distance: number;
};

export type Winner = {
  id: number;
  wins: number;
  time: number;
};

export type NewWinner = {
  wins: number;
  time: number;
};
