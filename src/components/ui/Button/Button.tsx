import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  disabled?:boolean
  
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  disabled,
  
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-green-600 border-2 border-green-600 hover:bg-green-50 focus:ring-green-500",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
      
    >
      {children}
    </button>
  );
};
