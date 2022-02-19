import React, { useCallback, useEffect, useState } from 'react';
import Hero from './components/Hero';
import Main from './components/Main';
import { LatLng } from './interfaces/location.interface';
import { WeatherData, WeatherLocationDataResponse } from './interfaces/weather.interface';
import { getCurrentLocation } from './services/location.service';
import { info } from './services/log.service';
import { fetchLocationWeather, searchLocation } from './services/weather.service';

const DEFAULT_COORDS: LatLng = { lat: 40.7128, lng: 74.0060 }; // NYC latitude and longitude

const App = () => {

  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherLocationDataResponse | null>(null);

  const handleSearch = useCallback(async (query: string | LatLng) => {
    setLoading(true);
    try {
      const locations = await searchLocation(query);
      info(locations);
      const data = await fetchLocationWeather(locations[0].woeid);
      setWeatherData(data);
      info(data);
    } catch (error) {
      info(error);
      alert('There was an error getting the info');
    }
    setLoading(false);
  }, []);

  const handleGetGeolocation = useCallback(async () => {
    try {
      setLoading(true);
      const { coords } = await getCurrentLocation();
      handleSearch({ lat: coords.latitude, lng: coords.longitude });
    } catch (error) {
      info(error);
      handleSearch(DEFAULT_COORDS);
    };
  }, [handleSearch]);

  useEffect(() => {
    handleGetGeolocation();
  }, []);

  return (
    <div>
      <Hero locationName={weatherData?.title} forecast={weatherData?.consolidated_weather} />
      <Main />
    </div>
  );
}

export default App;
