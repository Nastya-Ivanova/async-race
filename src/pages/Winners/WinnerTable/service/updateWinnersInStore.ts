import { getAllRecords } from 'API/api';
import { setWinnersAndCountWinners, store } from 'store';
import { Paths, Winner } from 'type';

export const updateWinnersInStore = async (): Promise<void> => {
  const result = await getAllRecords(Paths.winners, { _page: store.winnersPage, _limit: '10' });
  setWinnersAndCountWinners(result.records as Winner[], result.totalCountOfRecords);
};
