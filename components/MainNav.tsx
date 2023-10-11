"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import { ICategory } from "../types";

interface IMainNav {
  data: ICategory[];
}

const MainNav: FC<IMainNav> = ({ data }) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <nav className="mx-6 flex items-center space-x-4">
      {routes.map((route) => (
        <Link
          key={route.href}
          className={`${
            route.active ? "text-black" : "text-neutral-500"
          } text-sm font-medium transition-colors hover:text-black`}
          href={route.href}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
