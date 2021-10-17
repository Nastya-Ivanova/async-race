import { store } from 'store';
import { htmlStringToElement } from 'utils/htmlStringToElement';
import './Header.scss';

export const Header = (): HTMLElement =>
  htmlStringToElement(`
    <div id="header" class="header">
      <h2 class="header__title">Garage (${store.countCars})</h2>
      <p class="header__text">Page: ${store.carsPage}</p>
    </div>
  `);
