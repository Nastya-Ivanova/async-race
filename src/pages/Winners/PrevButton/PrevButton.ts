import { rerenderService } from 'rerenderService';
import { setNumberPage, store } from 'store';
import { WinnerButton } from '../WinnerButton';
import { updateWinnersInStore } from '../WinnerTable/service/updateWinnersInStore';
import './PrevButton.scss';

const prevPage = async () => {
  setNumberPage('winnersPage', 'prev');
  await updateWinnersInStore();
  rerenderService.rerenderWinners();
};

export const PrevButton = (): HTMLElement => {
  const btn = WinnerButton('prev', () => {
    prevPage();
  });

  if (store.winnersPage === 1) {
    btn.setAttribute('disabled', 'disabled');
  } else {
    btn.removeAttribute('disabled');
  }

  return btn;
};
