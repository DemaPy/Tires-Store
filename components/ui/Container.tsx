import React, { FC } from "react";

interface IContainer {
  children: React.ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
