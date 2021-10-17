import { htmlStringToElement } from 'utils/htmlStringToElement';
import './Garage.scss';
import { Menu } from 'pages/Garage/Menu';
import { CreateField } from './CreateField';
import { UpdateField } from './UpdateField';
import { GarageList } from './GarageList';
import { Header } from './Header';

export const Garage = (): HTMLElement => {
  const garage = htmlStringToElement(`
    <div id="garage" class="garage"></div>
  `);

  garage.append(Header(), CreateField(), UpdateField(), Menu(), GarageList());

  return garage;
};
