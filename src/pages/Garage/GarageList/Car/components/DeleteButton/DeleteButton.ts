import { Button } from 'pages/Garage/GarageButton';
import { rerenderService } from 'rerenderService';
import { removeCar } from 'pages/Garage/GarageList/Car/service/removeCar';
import './DeleteButton.scss';
import { updateCarsInStore } from 'pages/Garage/GarageList/Car/service/updateCarsInStore';

const deleteCar = async (id: number) => {
  await removeCar(id);
  await updateCarsInStore();
  rerenderService.rerenderGarage();
};

export const DeleteButton = (id: number): HTMLElement => {
  const btn = Button('delete', () => deleteCar(id));

  return btn;
};
