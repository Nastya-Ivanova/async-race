import { store } from 'store';

export const showHiddenIconSort = (sortField: string, btn: HTMLElement): void => {
  if (store.sortBy === sortField) {
    btn.classList.remove('sort-none');
  } else {
    btn.classList.add('sort-none');
  }
};
