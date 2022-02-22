import clsx from 'clsx';
import React from 'react';
import Icon from './Icon';

export type FabProps = {
  icon: string;
  classes?: { root?: string; icon?: string };
  onClick?: () => void;
};

const Fab: React.FC<FabProps> = ({ classes, icon, onClick }) => {
  return (
    <div
      className={clsx([
        "flex items-center justify-center rounded-full bg-primary text-white shadow-lg h-10 w-10",
        classes?.root
      ])}
      onClick={onClick}
    >
      <Icon className={classes?.icon} name={icon} />
    </div>
  )
}

export default Fab