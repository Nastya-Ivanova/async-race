import { store } from 'store';
import { Winner } from 'type';
import { createWinner } from './createWinner';
import { updateWinner } from './updateWinner';

export const checkWinnersAtCar = (carId: number, time: number): void => {
  const winner = store.winners.find((item) => item.id === carId) as Winner;

  if (winner) {
    const currentTime = winner.time;
    const updWinner = {
      wins: winner.wins + 1,
      time: time / 1000 < currentTime ? time / 1000 : currentTime,
    };
    updateWinner(carId, updWinner);
  } else {
    createWinner(carId, time);
  }
};
