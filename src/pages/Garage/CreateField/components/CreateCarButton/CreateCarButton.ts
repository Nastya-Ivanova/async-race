import { Button } from 'pages/Garage/GarageButton/GarageButton';
import { rerenderService } from 'rerenderService';
import { NewCar } from 'type';
import { updateCarsInStore } from 'pages/Garage/GarageList/Car/service/updateCarsInStore';
import { createCar } from 'pages/Garage/GarageList/Car/service/createCar';

const create = async (crtCar: NewCar) => {
  await createCar(crtCar);
  await updateCarsInStore();
  rerenderService.rerenderGarage();
};

export const CreateCarButton = (crtCar: NewCar): HTMLElement => {
  const btn = Button('create', () => create(crtCar));

  btn.setAttribute('disabled', 'disabled');

  return btn;
};
