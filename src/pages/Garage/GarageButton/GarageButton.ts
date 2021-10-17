import { htmlStringToElement } from 'utils/htmlStringToElement';
import './GarageButton.scss';

export const Button = (text: string, callback: (evt: Event) => void): HTMLElement => {
  const btn = htmlStringToElement(`<button id="btn-${text.split(' ').join('-')}">${text}</button>`);

  btn.addEventListener('click', callback);

  return btn;
};
