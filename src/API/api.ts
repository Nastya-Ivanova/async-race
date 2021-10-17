import { stopCar } from 'store';
import { Car, Paths, moveParamsCar, Winner } from 'type';

const baseUrl = 'http://127.0.0.1:3000';

const generateQueryString = (params: { [index: string]: string | number }) =>
  params
    ? `?${Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&')}`
    : '';

export const getAllRecords = async (
  path: string,
  params: { [index: string]: string | number }
): Promise<{ records: Car[] | Winner[]; totalCountOfRecords: number }> => {
  const response = await fetch(`${baseUrl}${path}${generateQueryString(params)}`);
  const records = await response.json();
  const totalCountOfRecords = Number(response.headers.get('X-Total-Count'));

  return {
    records,
    totalCountOfRecords,
  };
};

export const getRecord = async (path: string, id: number): Promise<Car> => {
  const response = await fetch(`${baseUrl}${path}/${id}`);
  const record = await response.json();

  return record;
};

export const createRecord = async (
  path: string,
  body: { [index: string]: string | number }
): Promise<Car | Winner> => {
  const response = await fetch(`${baseUrl}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const newRecord = await response.json();

  return newRecord;
};

export const deleteRecord = async (path: string, id: number): Promise<Car> => {
  const response = await fetch(`${baseUrl}${path}/${id}`, {
    method: 'DELETE',
  });
  const deletedRecord = await response.json();

  return deletedRecord;
};

export const updateRecord = async (
  path: string,
  id: number,
  body: { [index: string]: string | number }
): Promise<Car> => {
  const response = await fetch(`${baseUrl}${path}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const updatedRecord = await response.json();

  return updatedRecord;
};

export const startStopCarsEngine = async (params: {
  [index: string]: string | number;
}): Promise<moveParamsCar> => {
  const response = await fetch(`${baseUrl}${Paths.engine}/${generateQueryString(params)}`, {
    method: 'GET',
  });
  const startCarsEngine = await response.json();

  return startCarsEngine;
};

export const switchCarsEngineToDriveMode = async (params: {
  [index: string]: string | number;
}): Promise<void> => {
  const response = await fetch(`${baseUrl}${Paths.engine}/${generateQueryString(params)}`, {
    method: 'GET',
  });

  if (response.status !== 200) {
    stopCar(params.id as number);
  }
};
