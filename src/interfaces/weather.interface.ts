export enum WeatherType {
  CLEAR = "Clear",
  HAIL = "Hail",
  HEAVY_CLOUD = "Heavy Cloud",
  HEAVY_RAIN = "Heavy Rain",
  LIGHT_CLOUD = "Light Cloud",
  LIGHT_RAIN = "Light Rain",
  SHOWER = "Shower",
  SLEET = "Sleet",
  SNOW = "Snow",
  THUNDERSTORM = "Thunderstorm",
};


export interface WeatherLocationResponse {
  title: string;
  location_type: string;
  latt_long: number;
  woeid: number;
  distance: number;
}

export type WeatherData = {
  id: number;
  applicable_date: string;
  weather_state_name: WeatherType;
  weather_state_abbr: string;
  wind_speed: number;
  wind_direction: number;
  wind_direction_compass: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export type WeatherSource = {
  title: string;
  url: string;
}

export interface WeatherLocationDataResponse {
  consolidated_weather: WeatherData[];
  latt_long: number;
  location_type: string;
  parent: Omit<WeatherLocationResponse, "distance">;
  sources: WeatherSource[];
  sun_rise: string;
  sun_set: string;
  time: string;
  timezone_name: string;
  title: string;
}

