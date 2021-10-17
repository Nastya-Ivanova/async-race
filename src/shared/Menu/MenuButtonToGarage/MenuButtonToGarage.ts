import { MenuButton } from '../MenuButton';

export const MenuButtonToGarage = (): HTMLElement => {
  const btn = MenuButton('garage');

  btn.addEventListener('click', async () => {
    const garage = document.getElementById('garage') as HTMLElement;
    const winners = document.getElementById('winners') as HTMLElement;
    const winnerBtn = document.getElementById('btn-winners') as HTMLElement;
    const garageBtn = document.getElementById('btn-garage') as HTMLElement;

    garage.style.display = 'block';

    winners.remove();

    winnerBtn.removeAttribute('disabled');
    garageBtn.setAttribute('disabled', 'disabled');
  });

  btn.setAttribute('disabled', 'disabled');

  return btn;
};
