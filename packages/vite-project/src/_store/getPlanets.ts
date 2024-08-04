import { signal } from '@preact/signals-react';
import { Planet, PlanetsRequest } from './types.ts';
import Axios from 'axios';

export const planets = signal<Planet[]>([]);
export const planetsStatus = signal<{
  loading: boolean;
  loaded: boolean;
}>({ loaded: false, loading: false });
export const planetsMeta = signal<Omit<PlanetsRequest, 'results'>>({ count: 0, previous: null, next: null });

export async function getPlanets() {
  try {
    planetsStatus.value = { ...planetsStatus.value, loading: true };
    const result = await Axios.get<PlanetsRequest>('/planets');
    const { results, ...rest } = result.data;
    planets.value = results;
    planetsMeta.value = rest;
    planetsStatus.value = { ...planetsStatus.value, loading: false };
    console.log('planets', planets.value);
    console.log('planetsMeta', planetsMeta.value);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('something wrong');
    }
  }
}
