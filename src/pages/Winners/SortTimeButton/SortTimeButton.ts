import { SortButton } from '../SortButton';
import './SortTimeButton.scss';

export const SortTimeButton = (): HTMLElement =>
  SortButton('sort time', 'Best time (seconds)', 'time');
