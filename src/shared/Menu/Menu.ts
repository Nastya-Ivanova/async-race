import { htmlStringToElement } from 'utils/htmlStringToElement';
import './Menu.scss';
import { MenuButtonToGarage } from './MenuButtonToGarage';
import { MenuButtonToWinners } from './MenuButtonToWinners';

export const Menu = (): HTMLElement => {
  const menu = htmlStringToElement(`
    <nav class="menu"></nav>
  `);

  menu.append(MenuButtonToGarage(), MenuButtonToWinners());

  return menu;
};
