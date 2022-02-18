import React from 'react';

export type TempValueProps = { value: number };

const TempValue: React.FC<TempValueProps> = ({ value }) => {
  return (
    <div className="text-center leading-none">
      <span className="text-contrast text-[144px]">{value}</span>
      <span className="text-contrast-dark text-5xl opacity-50">°C</span>
    </div>
  )
}

export default TempValue;