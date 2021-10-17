import { Button } from 'pages/Garage/GarageButton';
import { rerenderService } from 'rerenderService';
import { setNumberPage, store } from 'store';
import './PrevButton.scss';
import { updateCarsInStore } from 'pages/Garage/GarageList/Car/service/updateCarsInStore';

const prevPage = async () => {
  setNumberPage('carsPage', 'prev');
  await updateCarsInStore();
  rerenderService.rerenderHeader();
  rerenderService.rerenderGarageList();
};

export const PrevButton = (): HTMLElement => {
  const btn = Button('prev', () => prevPage());

  if (store.carsPage === 1) {
    btn.setAttribute('disabled', 'disabled');
  } else {
    btn.removeAttribute('disabled');
  }

  return btn;
};
