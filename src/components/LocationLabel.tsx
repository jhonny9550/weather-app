import clsx from 'clsx';
import React from 'react';
import Icon from './Icon';

export type LocationLabelProps = { className?: string; text: string };

const LocationLabel: React.FC<LocationLabelProps> = ({ className, text }) => {
  return (
    <div className={clsx(["text-lg", className])}>
      <Icon className='mr-3 align-middle' name="location_on"></Icon>
      <span className="align-middle">{text}</span>
    </div>
  )
}

export default LocationLabel;
