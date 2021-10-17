import { Button } from 'pages/Garage/GarageButton';
import { rerenderService } from 'rerenderService';
import { setSelectCarId, setSelectColor, setSelectName } from 'store';
import './SelectButton.scss';

const selectCar = async (id: number, name: string, color: string) => {
  setSelectCarId(id);
  setSelectName(name);
  setSelectColor(color);
  rerenderService.rerenderUpdateField();
};

export const SelectButton = (id: number, name: string, color: string): HTMLElement => {
  const btn = Button('select', () => selectCar(id, name, color));

  return btn;
};
