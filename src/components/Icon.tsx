import React from 'react';
import clsx from 'clsx';

export type IconProps = { className?: string; name: string, onClick?: () => void };

const Icon: React.FC<IconProps> = ({ className, name, onClick }) =>
  <span
    className={clsx(["material-icons", className])}
    onClick={onClick}
  >
    {name}
  </span>;

export default Icon;
