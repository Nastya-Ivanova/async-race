import { store, setRace } from 'store';
import { Car } from 'type';

export const showWinner = (id: number, time: number): void => {
  const garage = document.getElementById('garage') as HTMLElement;
  const car = store.cars.find((item) => item.id === id) as Car;
  const { name } = car;
  const timeSec = time / 1000;

  const div = document.createElement('div');
  div.classList.add('winner');
  div.textContent = `Winner: ${name}, time: ${timeSec} sec`;
  garage.append(div);
  setRace(false);
};
