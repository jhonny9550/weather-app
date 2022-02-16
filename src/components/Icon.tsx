import React from 'react';
import clsx from 'clsx';

export type IconProps = { className?: string; name: string };

const Icon: React.FC<IconProps> = ({ className, name }) =>
  <span className={clsx(["material-icons", className])}>{name}</span>;

export default Icon;
