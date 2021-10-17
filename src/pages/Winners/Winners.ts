import { htmlStringToElement } from 'utils/htmlStringToElement';
import { store } from 'store';
import './Winner.scss';
import { WinnerTable } from './WinnerTable';

export const Winners = async (): Promise<HTMLElement> => {
  const winners = htmlStringToElement(`
    <div id="winners" class="winners">
      <h2 class="winners__header">Winners (${store.countWinners})</h2>
      <p class="winners__text">Page: ${store.winnersPage}</p>
    </div>
  `);

  winners.append(await WinnerTable());

  return winners;
};
