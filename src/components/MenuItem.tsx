import clsx from 'clsx';
import React from 'react';
import Icon from './Icon';

export type MenuItemProps = {
  className?: string;
  onClick?: () => void;
  text: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ className, onClick, text }) => {
  return (
    <div className={clsx([
      "px-3 py-5",
      "text-contrast",
      "flex items-center",
      "hover:border hover:border-solid hover:border-primary",
      className
    ])}
      onClick={onClick}
    >
      <span className="flex-1">{text}</span>
      <Icon className="hidden group-hover:block" name="chevron_right" />
    </div>
  )
}

export default MenuItem