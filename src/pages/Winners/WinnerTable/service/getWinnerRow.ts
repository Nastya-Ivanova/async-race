import { WinnerRow } from 'pages/Winners/WinnerRow';
import { store } from 'store';
import { findCarMatchingToWinner } from './findCarMatchingToWinner';

export const getWinnerRow = async (): Promise<HTMLElement[]> => {
  const rows = await Promise.all(
    store.winners.map(async (winner, index) => {
      const car = await findCarMatchingToWinner(winner.id);
      return WinnerRow(
        winner.wins,
        winner.time,
        (store.winnersPage - 1) * 10 + index,
        car.color,
        car.name
      );
    })
  );

  return rows;
};
