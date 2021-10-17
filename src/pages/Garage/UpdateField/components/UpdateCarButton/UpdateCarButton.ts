import { Button } from 'pages/Garage/GarageButton';
import { rerenderService } from 'rerenderService';
import { updateCarsInStore } from 'pages/Garage/GarageList/Car/service/updateCarsInStore';
import { updateCar } from 'pages/Garage/GarageList/Car/service/updateCar';
import { setSelectCarId, setSelectColor, setSelectName, store } from 'store';

const update = async () => {
  await updateCar();

  setSelectCarId(0);
  setSelectName('');
  setSelectColor('');

  await updateCarsInStore();

  rerenderService.rerenderGarage();
};

export const UpdateCarButton = (): HTMLElement => {
  const btn = Button('update', () => update());

  if (store.selectCarId === 0) {
    btn.setAttribute('disabled', 'disabled');
  }

  return btn;
};
