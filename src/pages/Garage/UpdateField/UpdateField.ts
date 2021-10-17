import { htmlStringToElement } from 'utils/htmlStringToElement';
import { UpdateCarButton } from 'pages/Garage/UpdateField/components/UpdateCarButton';
import './UpdateField.scss';
import { setSelectColor, setSelectName, store } from 'store';

export const UpdateField = (): HTMLElement => {
  const fieldName = htmlStringToElement(`
    <input id="field-name-update" type="text">
  `) as HTMLInputElement;

  fieldName.value = store.selectName;

  fieldName.addEventListener('change', () => {
    setSelectName(fieldName.value);
  });

  const fieldColor = htmlStringToElement(`
    <input id="field-color-update" type="color">
  `) as HTMLInputElement;

  fieldColor.value = store.selectColor;

  fieldColor.addEventListener('change', () => {
    setSelectColor(fieldColor.value);
  });

  const updateField = htmlStringToElement(`
    <div id="update-field" class="update-field"></div>
  `);

  updateField.append(fieldName, fieldColor, UpdateCarButton());

  return updateField;
};

/*
import { htmlStringToElement } from 'utils/htmlStringToElement';
import { NewCar } from 'type';
import { UpdateCarButton } from 'pages/Garage/UpdateField/components/UpdateCarButton';
import './UpdateField.scss';

export const UpdateField = (): HTMLElement => {
  const updCar: NewCar = {
    name: '',
    color: '',
  };

  const fieldName = htmlStringToElement(`
    <input id="field-name-update" type="text">
  `) as HTMLInputElement;

  fieldName.addEventListener('change', () => {
    updCar.name = fieldName.value;
  });

  const fieldColor = htmlStringToElement(`
    <input id="field-color-update" type="color">
  `) as HTMLInputElement;

  fieldColor.addEventListener('change', () => {
    updCar.color = fieldColor.value;
  });

  const updateField = htmlStringToElement(`
    <div class="update-field"></div>
  `);

  updateField.append(fieldName, fieldColor, UpdateCarButton(fieldName, fieldColor, updCar));

  return updateField;
};

*/
