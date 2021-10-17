import { htmlStringToElement } from 'utils/htmlStringToElement';
import './WinnerButton.scss';

export const WinnerButton = (text: string, callback: () => void): HTMLElement => {
  const btn = htmlStringToElement(
    `<button id="btn-wins-${text.split(' ').join('-')}">${text}</button>`
  );

  btn.addEventListener('click', callback);

  return btn;
};
