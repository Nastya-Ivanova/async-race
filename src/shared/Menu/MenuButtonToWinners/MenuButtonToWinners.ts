import { updateWinnersInStore } from 'pages/Winners/WinnerTable/service/updateWinnersInStore';
import { rerenderService } from 'rerenderService';
import { MenuButton } from '../MenuButton';

export const MenuButtonToWinners = (): HTMLElement => {
  const btn = MenuButton('winners');

  btn.addEventListener('click', async () => {
    await updateWinnersInStore();
    rerenderService.rerenderWinners();
  });

  return btn;
};
