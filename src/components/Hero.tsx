import React from 'react'
import Button from './Button';
import Fab from './Fab';
import CloudBackground from '../assets/images/Cloud-background.png';
import TempValue from './TempValue';
import DateInfo from './DateInfo';
import LocationLabel from './LocationLabel';
import { WeatherData } from '../interfaces/weather.interface';
import { getWeatherImage } from '../utils/static.utils';

export type HeroProps = {
  forecast?: WeatherData[],
  locationName?: string,
};

const Hero: React.FC<HeroProps> = ({ locationName = '', forecast = [] }) => {
  let current: WeatherData | null = null;
  let rest: WeatherData[] = [];
  if (forecast.length > 0) {
    const [f, ...r] = forecast;
    current = f;
    rest = r;
  }
  return (
    <div className="bg-paper text-center text-contrast-dark min-h-screen">
      <div className="flex justify-between items-center w-full px-3 py-[18px] sm:px-[46px]">
        <Button text="Search for places" />
        <Fab icon="gps_fixed" />
      </div>
      <div className="py-10 mt-5 flex items-center justify-center relative overflow-hidden">
        <img src={getWeatherImage(current?.weather_state_name)} alt="Shower" />
        <img
          src={CloudBackground}
          alt="Clouds"
          className="absolute z-10 max-w-none w-[170%] -left-1/3 -top-[15%] opacity-10"
        />
      </div>
      <TempValue value={current?.the_temp} />
      <h3 className="mt-8 text-4xl">{current?.weather_state_name || '-'}</h3>
      <DateInfo className="mt-11" />
      <LocationLabel className='mt-8' text={locationName} />
    </div>
  )
}

export default Hero;