import { htmlStringToElement } from 'utils/htmlStringToElement';
import { NewCar } from 'type';
import { CreateCarButton } from 'pages/Garage/CreateField/components/CreateCarButton';
import './CreateField.scss';

export const CreateField = (): HTMLElement => {
  const crtCar: NewCar = {
    name: '',
    color: '',
  };

  const btn = CreateCarButton(crtCar);

  const fieldText = htmlStringToElement(`
    <input type="text">
  `);

  fieldText.addEventListener('input', () => {
    crtCar.name = (fieldText as HTMLInputElement).value;
    btn.removeAttribute('disabled');
  });

  const fieldColor = htmlStringToElement(`
    <input type="color">
  `);

  fieldColor.addEventListener('change', () => {
    crtCar.color = (fieldColor as HTMLInputElement).value;
  });

  const createField = htmlStringToElement(`
    <div id="create-field" class="create-field"></div>
  `);

  createField.append(fieldText, fieldColor, btn);

  return createField;
};
