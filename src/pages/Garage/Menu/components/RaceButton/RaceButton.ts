import { Button } from 'pages/Garage/GarageButton';
import { rerenderService } from 'rerenderService';
import { raceCars } from 'store';
import './RaceButton.scss';

const race = (resetBtn: HTMLElement, raceBtn: HTMLElement) => {
  raceCars();

  resetBtn.removeAttribute('disabled');
  raceBtn.setAttribute('disabled', 'disabled');

  rerenderService.rerenderGarageList();
};

export const RaceButton = (resetBtn: HTMLElement): HTMLElement => {
  const btn = Button('race', (evt) => race(resetBtn, evt.target as HTMLElement));

  return btn;
};
