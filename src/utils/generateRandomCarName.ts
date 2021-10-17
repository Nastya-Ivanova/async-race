import { getRandomNumber } from './getRandomNumber';

export const generateRandomCarName = (): string => {
  const nameCars = [
    'Mazda',
    'Lada',
    'Tesla',
    'BMW',
    'Volkswagen',
    'Peugeot',
    'Reno',
    'Bentley',
    'Alfa Romeo',
    'Skoda',
  ];
  const modelCars = [
    'Corsa',
    'Oktavia',
    'Duster',
    'X6',
    'Solaris',
    'Polo',
    'Cayen',
    'Diablo',
    'Combi',
    'Priora',
  ];

  return `${nameCars[getRandomNumber()]} ${modelCars[getRandomNumber()]}`;
};
