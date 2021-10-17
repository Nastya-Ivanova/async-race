import { htmlStringToElement } from 'utils/htmlStringToElement';
import './MenuButton.scss';

export const MenuButton = (text: string): HTMLElement =>
  htmlStringToElement(`
  <button id="btn-${text}" class="menu__btn">${text}</button>
`);
