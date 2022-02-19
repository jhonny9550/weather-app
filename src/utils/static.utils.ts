import ClearImage from '../assets/images/Clear.png';
import HailImage from '../assets/images/Hail.png';
import HeavyCloudImage from '../assets/images/HeavyCloud.png';
import HeavyRainImage from '../assets/images/HeavyRain.png';
import LightCloudImage from '../assets/images/LightCloud.png';
import LightRainImage from '../assets/images/LightRain.png';
import ShowerImage from '../assets/images/Shower.png';
import SleetImage from '../assets/images/Sleet.png';
import SnowImage from '../assets/images/Snow.png';
import ThunderstormImage from '../assets/images/Thunderstorm.png';
import { WeatherType } from '../interfaces/weather.interface';

export const getWeatherImage = (type?: WeatherType) => {
  switch (type) {
    case WeatherType.CLEAR:
      return ClearImage;
    case WeatherType.HAIL:
      return HailImage;
    case WeatherType.HEAVY_CLOUD:
      return HeavyCloudImage;
    case WeatherType.HEAVY_RAIN:
      return HeavyRainImage;
    case WeatherType.LIGHT_CLOUD:
      return LightCloudImage;
    case WeatherType.LIGHT_RAIN:
      return LightRainImage;
    case WeatherType.SLEET:
      return SleetImage;
    case WeatherType.SNOW:
      return SnowImage;
    case WeatherType.THUNDERSTORM:
      return ThunderstormImage;
    case WeatherType.SHOWER:
    default:
      return ShowerImage;
  }
}