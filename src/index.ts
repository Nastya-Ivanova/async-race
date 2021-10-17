import { Garage } from 'pages/Garage';
import { updateCarsInStore } from 'pages/Garage/GarageList/Car/service/updateCarsInStore';
import { Menu } from 'shared/Menu';

const root = async () => {
  await updateCarsInStore();
  document.body.append(Menu(), Garage());
};

root();
