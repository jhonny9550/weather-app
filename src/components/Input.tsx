import clsx from 'clsx';
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import Icon from './Icon';

export type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <div
      className="
        relative 
        p-4
        text-base text-contrast-dark 
        border border-contrast border-solid
        flex items-center
      "
    >
      <Icon className='mr-4' name="search" />
      <input
        {...rest}
        className={clsx([
          "text-contrast bg-transparent outline-none",
          rest.className
        ])}
      />
    </div>
  )
}

export default Input;