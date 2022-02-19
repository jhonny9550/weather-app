import { LatLng } from "../interfaces/location.interface";
import { WeatherLocationDataResponse, WeatherLocationResponse } from "../interfaces/weather.interface";

const CORS_API = 'https://cors-anywhere.herokuapp.com';
const API_URL = 'https://www.metaweather.com/api/location';

const DEFAULT_HEADERS: HeadersInit = { origin: 'x-requested-with' };

/**
 * @param query location query search input or coords object (lat, lng)
 * @returns API location response
 */
export const searchLocation = async (query: string | LatLng): Promise<WeatherLocationResponse[]> => {
  const url = new URL(`${CORS_API}/${API_URL}/search`);
  if (typeof query === 'string') {
    url.search = new URLSearchParams({ query }).toString();
  } else {
    const lattlong = `${query.lat},${query.lng}`;
    url.search = new URLSearchParams({ lattlong }).toString();
  }
  const response = await fetch(url.toString(), { headers: DEFAULT_HEADERS });
  return response.json();
}

/**
 * @param woeid Where On Earth ID
 * @param date Date weather to be fetched
 * @returns The weather data in the given position and date
 */
export const fetchLocationWeather =
  async (woeid: number | string, date?: string): Promise<WeatherLocationDataResponse> => {
    const url = new URL(date ? `${CORS_API}/${API_URL}/${woeid}/${date}` : `${CORS_API}/${API_URL}/${woeid}`);
    const response = await fetch(url.toString(), { headers: DEFAULT_HEADERS });
    return response.json();
  };
