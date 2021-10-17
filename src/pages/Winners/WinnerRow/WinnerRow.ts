import { htmlStringToElement } from 'utils/htmlStringToElement';
import './WinnerRow.scss';

export const WinnerRow = (
  wins: number,
  time: number,
  index: number,
  carColor: string,
  carName: string
): HTMLElement => {
  const row = htmlStringToElement(`
    <div id="winners__row" class="winners__row">
      <div class="winners__row-item">${index + 1}</div>
      <div class="winners__row-item">
        <svg width="30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20.1 6.7" xml:space="preserve">
          <g style="fill:${carColor};">
            <path d="M20.1,3.4c0,0-0.7-1.6-5.4-1.5c0,0-4.6-4.6-14,0.6c0,0,0.2,1-0.6,1C0,4.3-0.2,5.3,0.4,5.8c1.1,0,1.3,0,1.3,0
              c0-0.1,0-0.3,0-0.4c0-1,0.8-1.7,1.7-1.7S5,4.5,5,5.4c0,0.1,0,0.3,0,0.4h0.3h8.4h1.1c0-0.1,0-0.3,0-0.4c0-1,0.8-1.7,1.7-1.7
              c1.3,0,2,1.3,1.9,2.1l1.8-0.2C19.8,4,20.1,3.4,20.1,3.4z M6.9,2.2H2.8c0,0,1.7-0.8,4.1-1.3V2.2z M7.8,2.2V0.8
              C11.3,0.3,14,2.2,14,2.2H7.8z"/>
            <path d="M16.4,4.1c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.5-0.6,1.5-1.3C17.9,4.7,17.1,4.1,16.4,4.1z
              M16.4,5.9c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5C16.9,5.7,16.7,5.9,16.4,5.9z"/>
            <path d="M3.3,4.1c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3C4.6,4.7,4,4.1,3.3,4.1z
              M3.3,5.9C3,5.9,2.8,5.7,2.8,5.4S3,4.9,3.3,4.9s0.5,0.2,0.5,0.5C3.8,5.7,3.6,5.9,3.3,5.9z"/>
          </g>
        </svg>
      </div>
      <div class="winners__row-item">${carName}</div>
      <div class="winners__row-item">${wins}</div>
      <div class="winners__row-item">${time}</div>
    </div>
  `);

  return row;
};
