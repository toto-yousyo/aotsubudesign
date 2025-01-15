import React from "react";
import { Primary } from "./Button.stories";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  secondary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}
/** Primary UI component for user interaction */
export const Button = ({
  primary,
  secondary,
  size = "medium",
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
    ? "bg-primary text-white hover:bg-primary/70"
    : secondary
      ? "text-primary hover:bg-green-200 border solid border-primary"
      : "text-gray-700 bg-transparent border solid border-gray-700 hover:bg-gray-100";

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
