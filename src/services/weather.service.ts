import { WeatherLocationDataResponse, WeatherLocationResponse } from "../interfaces/weather.interface";

const API_URL = '/api/location';

/**
 * @param query location query search input
 * @returns API 
 */
export const searchLocation = async (query: string): Promise<WeatherLocationResponse> => {
  const url = new URL(`${API_URL}/search`);
  url.search = new URLSearchParams({ query }).toString();
  const response = await fetch(url.toString());
  return response.json();
}

/**
 * @param woeid Where On Earth ID
 * @param date Date weather to be fetched
 * @returns The weather data in the given position and date
 */
export const fetchLocationWeather =
  async (woeid: number | string, date?: string): Promise<WeatherLocationDataResponse> => {
    const url = new URL(date ? `${API_URL}/${woeid}/${date}` : `${API_URL}/${woeid}`);
    const response = await fetch(url.toString());
    return response.json();
  };
