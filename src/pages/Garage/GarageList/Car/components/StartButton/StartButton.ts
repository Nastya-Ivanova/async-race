import { Button } from 'pages/Garage/GarageButton';
import { rerenderService } from 'rerenderService';
import { startCar } from 'store';
import { Car } from 'type';
import './StartButton.scss';

const start = (objCar: Car) => {
  startCar(objCar.id);
  rerenderService.rerenderCar(objCar);
};

export const StartButton = (objCar: Car): HTMLElement => {
  const btn = Button('start', () => start(objCar));

  return btn;
};
