
import React from 'react';
import { Primary } from './Button.stories';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}
/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    small: "py-sm px-base text-xs",
    medium: "py-sm px-lg text-sm",
    large: "py-base px-xl text-base",
  };

  const mode = primary
    ? 'bg-primary text-white hover:bg-primary/80'
    : 'bg-secondary text-white hover:bg-secondary/80';

  return (
    <button
      type="button"
      className={`rounded font-sans ${sizeClasses[size]} ${mode}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};


