import { startStopCarsEngine } from 'API/api';
import { moveParamsCar } from 'type';

export const getEngineParams = async (id: number): Promise<moveParamsCar> => {
  const engineParams = await startStopCarsEngine({ id, status: 'started' });
  return engineParams;
};
