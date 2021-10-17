import { Button } from 'pages/Garage/GarageButton';
import { rerenderService } from 'rerenderService';
import { stopCar } from 'store';
import { Car } from 'type';

const stop = (objCar: Car) => {
  stopCar(objCar.id);
  rerenderService.rerenderCar(objCar);
};

export const StopButton = (objCar: Car): HTMLElement => {
  const btn = Button('stop', () => stop(objCar));

  btn.setAttribute('disabled', 'disabled');

  return btn;
};
