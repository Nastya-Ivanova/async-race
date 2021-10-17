import { checkWinnersAtCar } from 'pages/Winners/WinnerTable/service/checkWinnersAtCar';
import { setCarWinner, store } from 'store';
import { StatusCar } from 'type';
import { showWinner } from 'utils/showWinner';

const CAR_WIDTH = 50;

export const runAnumationCar = (id: number, time: number, currentCar: HTMLElement): void => {
  const road = currentCar.querySelector(`#road-${id}`) as HTMLElement;
  const car = currentCar.querySelector(`#car-${id}`) as HTMLElement;

  let start: number | null = null;

  function step(timestamp: number) {
    const checkCar = store.statusCars.find((item) => item.id === id) as StatusCar;

    if (checkCar.status === 'stopped') {
      return;
    }

    if (!start) {
      start = timestamp;
    }

    const width = parseInt(getComputedStyle(road).width, 10) - CAR_WIDTH;

    const progress = Math.round((timestamp - start) * (width / time));

    car.style.transform = `translateX(${progress}px)`;

    if (progress < width) {
      window.requestAnimationFrame(step);
    } else if (store.carWinner && store.race) {
      showWinner(id, time);
      checkWinnersAtCar(id, time);
      setCarWinner(false);
    }
  }

  window.requestAnimationFrame(step);
};
