import { Button } from 'pages/Garage/GarageButton';
import { rerenderService } from 'rerenderService';
import { resetCars } from 'store';

const reset = () => {
  resetCars();

  rerenderService.rerenderGarage();
};

export const ResetButton = (): HTMLElement => {
  const btn = Button('reset', () => reset());

  btn.setAttribute('disabled', 'disabled');

  return btn;
};
