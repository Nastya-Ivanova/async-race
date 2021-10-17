import { switchCarsEngineToDriveMode } from 'API/api';
import { getEngineParams } from './getEngineParams';
import { runAnumationCar } from '../utils/runAnumationCar';

export const startEngine = async (idCar: number, car: HTMLElement): Promise<void> => {
  const engineParams = await getEngineParams(idCar);
  const time = Math.round(engineParams.distance / engineParams.velocity);
  runAnumationCar(idCar, time, car);
  await switchCarsEngineToDriveMode({ id: idCar, status: 'drive' });
};
