import { rerenderService } from 'rerenderService';
import { setNumberPage, store } from 'store';
import { WinnerButton } from '../WinnerButton';
import { updateWinnersInStore } from '../WinnerTable/service/updateWinnersInStore';
import './NextButton.scss';

const nextPage = async () => {
  setNumberPage('winnersPage', 'next');
  await updateWinnersInStore();
  rerenderService.rerenderWinners();
};

export const NextButton = (): HTMLElement => {
  const btn = WinnerButton('next', () => {
    nextPage();
  });

  btn.setAttribute('disabled', 'disabled');
  if (store.winnersPage * 10 < store.countWinners) {
    btn.removeAttribute('disabled');
  }

  return btn;
};
