import React, { MouseEventHandler, ReactElement } from "react";

const IconButton = ({
  onClick,
  className,
  icon,
}: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: ReactElement;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={
        `rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition ` +
        className
      }
    >
      {icon}
    </button>
  );
};

export default IconButton;
