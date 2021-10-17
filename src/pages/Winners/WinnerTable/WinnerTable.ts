import { htmlStringToElement } from 'utils/htmlStringToElement';
import { NextButton } from '../NextButton';
import { PrevButton } from '../PrevButton';
import { SortTimeButton } from '../SortTimeButton';
import { getWinnerRow } from './service/getWinnerRow';
import { SortWinsButton } from '../SortWinsButton';

export const WinnerTable = async (): Promise<HTMLElement> => {
  const table = htmlStringToElement(`
    <div class="winners__table"></div>
  `);

  const title = htmlStringToElement(`
    <div class="winners__title">
      <div class="winners__table-item">Number</div>
      <div class="winners__table-item">Car</div>
      <div class="winners__table-item">Name</div>
    </div>
  `);

  title.append(SortWinsButton(), SortTimeButton());
  table.append(title, ...(await getWinnerRow()), PrevButton(), NextButton());

  return table;
};
