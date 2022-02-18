import clsx from 'clsx';
import React from 'react';

export type ForecastGridProps = { className?: string };

const ForecastGrid: React.FC<ForecastGridProps> = ({ className }) => {
  return (
    <div className={clsx(['grid grid-cols-2 sm:grid-cols-5 gap-6', className])}>

    </div>
  )
}

export default ForecastGrid;
