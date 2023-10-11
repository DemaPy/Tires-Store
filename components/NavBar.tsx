import React from "react";
import Container from "./ui/Container";
import Link from "next/link";
import MainNav from "./MainNav";
import getCategories from "../actions/get-categories";
import NavBarActions from "./NavBarActions";

const NavBar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 flex h-16 items-center">
          <Link className="ml-4 flex lg:ml-0 gap-x-2" href={"/"}>
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavBarActions />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
