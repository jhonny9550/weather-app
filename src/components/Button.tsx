import React from 'react'
import clsx from 'clsx';

export type ButtonProps = {
  text: string,
  classes?: { root?: string, text?: string }
};

const Button: React.FC<ButtonProps> = ({ children, classes = {}, text = '' }) => {
  return (
    <div className={clsx([
      'bg-primary text-contrast px-5 py-3 shadow-md',
      classes?.root
    ])}>
      <span className={clsx([
        'text-current',
        classes?.text
      ])}>
        {text}
      </span>
    </div>
  )
}

export default Button;