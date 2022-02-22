import React from 'react'
import clsx from 'clsx';

export type ButtonProps = {
  text: string,
  classes?: { root?: string, text?: string },
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, classes = {}, onClick, text = '' }) => {
  return (
    <button
      className={clsx([
        'bg-primary text-contrast px-5 py-3 shadow-xl w-fit',
        classes?.root
      ])}
      onClick={onClick}
    >
      <span className={clsx([
        'text-current',
        classes?.text
      ])}>
        {text}
      </span>
    </button>
  )
}

export default Button;