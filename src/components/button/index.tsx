import * as React from "react";
import "./index.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
}

const Button = ({
  type = "button",
  className,
  onClick,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      {...restProps}
      type={type}
      onClick={onClick}
      className={`button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
