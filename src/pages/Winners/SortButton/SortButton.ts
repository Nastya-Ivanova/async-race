import { rerenderService } from 'rerenderService';
import { setSortBy, setSortOrder, store } from 'store';
import { htmlStringToElement } from 'utils/htmlStringToElement';
import { sortWinners } from '../WinnerTable/service/sortWinners';
import { showHiddenIconSort } from './utils/showHiddenIconSort';
import { switchIconSort } from './utils/switchIconSort';

const sortWins = async () => {
  await sortWinners();
  rerenderService.rerenderWinners();
};

export const SortButton = (nameId: string, text: string, sortField: string): HTMLElement => {
  const btn = htmlStringToElement(
    `<button id="btn-${nameId.split(' ').join('-')}" class="winners__table-item">${text}</button>`
  );

  showHiddenIconSort(sortField, btn);
  switchIconSort(sortField, btn);

  btn.addEventListener('click', () => {
    btn.classList.remove('sort-none');

    setSortBy(sortField);

    if (store.sortOrder === 'ASC') {
      setSortOrder('DESC');
    } else {
      setSortOrder('ASC');
    }

    sortWins();
  });

  return btn;
};
