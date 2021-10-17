import { store } from 'store';
import { htmlStringToElement } from 'utils/htmlStringToElement';
import { renderCar } from './Car';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import './GarageList.scss';

export const GarageList = (): HTMLElement => {
  const list = htmlStringToElement(`<ul id="garage-list" class="garage__list"></ul>`);
  const listItem = store.cars.map((car) => {
    const li = htmlStringToElement(`<li id="garage__item-${car.id}"></li>`);
    li.append(renderCar(car));
    return li;
  });

  list.append(...listItem, PrevButton(), NextButton());

  return list;
};
