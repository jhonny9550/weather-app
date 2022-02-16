import React from 'react'
import Button from './Button';
import Fab from './Fab';
import ShowerImage from '../assets/images/Shower.png';
import CloudBackground from '../assets/images/Cloud-background.png';

const Hero: React.FC = () => {
  return (
    <div className="bg-paper">
      <div className="flex justify-between items-center w-full px-3 py-[18px] sm:px-[46px]">
        <Button text="Search for places" />
        <Fab icon="gps_fixed" />
      </div>
      <div className="py-10 my-5 flex items-center justify-center relative overflow-hidden">
        <img src={ShowerImage} alt="Shower" />
        <img
          src={CloudBackground}
          alt="Clouds"
          className="absolute z-10 max-w-none w-[170%] -left-1/3 -top-[15%] opacity-10"
        />
      </div>
    </div>
  )
}

export default Hero;