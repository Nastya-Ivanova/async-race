import { htmlStringToElement } from 'utils/htmlStringToElement';
import { GenerateHundredCarsButton } from './components/GenerateHundredCarsButton';
import { RaceButton } from './components/RaceButton';
import { ResetButton } from './components/ResetButton';

export const Menu = (): HTMLElement => {
  const menu = htmlStringToElement(`
    <div id="menu"></div>
  `);

  const resetBtn = ResetButton();

  menu.append(GenerateHundredCarsButton(), RaceButton(resetBtn), resetBtn);

  return menu;
};
