import React, { useEffect, useState } from 'react';
import { WeatherType } from '../interfaces/weather.interface';
import { getWeatherImage } from '../utils/static.utils';
import Spinner from './Spinner';

export type ForecastItemProps = {
  date: string,
  weatherType: WeatherType,
  minDegrees: number,
  maxDegrees: number
};

const ForecastItem: React.FC<ForecastItemProps> = ({ date, minDegrees, maxDegrees, weatherType }) => {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    setImage(getWeatherImage(weatherType));
  }, [weatherType]);

  return (
    <div className="bg-paper">
      <p className="text-base">{date}</p>
      {image ? <img src={image} alt={weatherType} /> : <Spinner />}
      <div>
        <span className="text-base mr-4">{minDegrees}°C</span>
        <span className="text-base text-contrast-dark">{maxDegrees}°C</span>
      </div>
    </div>
  )
}

export default ForecastItem