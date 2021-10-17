import { Garage } from 'pages/Garage';
import { GarageList } from 'pages/Garage/GarageList';
import { renderCar } from 'pages/Garage/GarageList/Car';
import { Header } from 'pages/Garage/Header';
import { UpdateField } from 'pages/Garage/UpdateField';
import { Winners } from 'pages/Winners/Winners';
import { Car } from 'type';

const RerenderService = () => {
  const rerenderGarage = () => {
    const garage = document.getElementById('garage');

    if (garage) {
      garage.remove();
    }

    document.body.append(Garage());
  };

  const rerenderHeader = () => {
    const garage = document.getElementById('garage') as HTMLElement;
    const header = document.getElementById('header') as HTMLElement;

    header.remove();

    garage.prepend(Header());
  };

  const rerenderUpdateField = () => {
    const createField = document.getElementById('create-field') as HTMLElement;
    const updateField = document.getElementById('update-field') as HTMLElement;

    updateField.remove();

    createField.after(UpdateField());
  };

  const rerenderGarageList = () => {
    const garage = document.getElementById('garage') as HTMLElement;
    const garageList = document.getElementById('garage-list') as HTMLElement;

    garageList.remove();

    garage.append(GarageList());
  };

  const rerenderCar = (objCar: Car) => {
    const listItem = document.getElementById(`garage__item-${objCar.id}`) as HTMLElement;
    const car = listItem.firstElementChild as HTMLElement;

    car.remove();

    listItem.append(renderCar(objCar));
  };

  const rerenderWinners = async () => {
    const garage = document.getElementById('garage') as HTMLElement;
    const winners = document.getElementById('winners');
    const winnerBtn = document.getElementById('btn-winners') as HTMLElement;
    const garageBtn = document.getElementById('btn-garage') as HTMLElement;

    if (garage) {
      garage.style.display = 'none';
      winnerBtn.setAttribute('disabled', 'disabled');
      garageBtn.removeAttribute('disabled');
    }

    if (winners) {
      winners.remove();
    }

    document.body.append(await Winners());
  };

  return {
    rerenderGarage,
    rerenderHeader,
    rerenderUpdateField,
    rerenderGarageList,
    rerenderWinners,
    rerenderCar,
  };
};

export const rerenderService = RerenderService();
