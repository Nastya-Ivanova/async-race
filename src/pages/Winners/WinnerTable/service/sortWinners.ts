import { getAllRecords } from 'API/api';
import { setWinnersAndCountWinners, store } from 'store';
import { Paths, Winner } from 'type';

export const sortWinners = async (): Promise<void> => {
  const result = await getAllRecords(Paths.winners, {
    _page: store.winnersPage,
    _limit: '10',
    _sort: store.sortBy,
    _order: store.sortOrder,
  });
  setWinnersAndCountWinners(result.records as Winner[], result.totalCountOfRecords);
};
