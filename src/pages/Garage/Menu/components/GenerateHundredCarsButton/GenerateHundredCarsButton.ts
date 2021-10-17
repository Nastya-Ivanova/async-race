import { Button } from 'pages/Garage/GarageButton';
import { rerenderService } from 'rerenderService';
import { NewCar } from 'type';
import { generateRandomCarName } from 'utils/generateRandomCarName';
import { getRandomColor } from 'utils/getRandomColor';
import './GenerateHundredCarsButton.scss';
import { updateCarsInStore } from 'pages/Garage/GarageList/Car/service/updateCarsInStore';
import { createCar } from 'pages/Garage/GarageList/Car/service/createCar';

const generateHundredCars = async () => {
  const grtCar: NewCar = {
    name: '',
    color: '',
  };

  const result = [];

  for (let i = 0; i < 100; i += 1) {
    grtCar.name = generateRandomCarName();
    grtCar.color = `#${getRandomColor()}`;
    result.push(createCar(grtCar));
  }
  await Promise.all(result);
  await updateCarsInStore();
  rerenderService.rerenderGarage();
};

export const GenerateHundredCarsButton = (): HTMLElement => {
  const btn = Button('generete 100 cars', () => generateHundredCars());

  return btn;
};
