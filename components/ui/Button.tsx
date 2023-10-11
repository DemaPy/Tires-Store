import React, { ButtonHTMLAttributes, forwardRef } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(function Button(
  { className, children, disabled, type = "button", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={`${className} w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition-colors`}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
