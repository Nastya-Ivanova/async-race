import { store } from 'store';

export const switchIconSort = (sortField: string, btn: HTMLElement): void => {
  if (store.sortOrder === 'ASC' && store.sortBy === sortField) {
    btn.classList.remove('sort-desc');
  } else {
    btn.classList.add('sort-desc');
  }
};
