import { Button } from 'pages/Garage/GarageButton';
import { rerenderService } from 'rerenderService';
import { setNumberPage, store } from 'store';
import { updateCarsInStore } from 'pages/Garage/GarageList/Car/service/updateCarsInStore';

const nextPage = async () => {
  setNumberPage('carsPage', 'next');
  await updateCarsInStore();
  rerenderService.rerenderHeader();
  rerenderService.rerenderGarageList();
};

export const NextButton = (): HTMLElement => {
  const btn = Button('next', () => nextPage());

  btn.setAttribute('disabled', 'disabled');
  if (store.carsPage * 7 < store.countCars) {
    btn.removeAttribute('disabled');
  }

  return btn;
};
