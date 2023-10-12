import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(function Button(
  { className, children, disabled, type = "button", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        "w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
