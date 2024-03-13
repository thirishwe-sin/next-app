'use client';
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "Blogs",
    path: "#blogs"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Projects",
    path: "#projects"
  },
  {
    title: "Contact",
    path: "#contact"
  },
]

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false)


  return (
    <header className="sticky top-0 left-0 right-0 bg-opacity-90 bg-dark">
      <nav className="bg-primary">
        <div className="flex flex-row items-center justify-between mx-auto pt-5 pb-5 container bg-primary px-5">
          <Link className="text-2xl md:text-4xl text-secondary font-semibold" href="/">
            Thiri Shwe Sin
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navBarOpen ? 
            <button onClick={() => setNavBarOpen(!navBarOpen)}>
              <Bars3Icon className="h-5 w-5 " />
            </button> : 
            <button onClick={() => setNavBarOpen(!navBarOpen)}>
              <XMarkIcon className="h-5 w-5 " />
            </button> 
          }
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex md:flex-row p-4 md:p-0 md:space-x-8">
              {navLinks.map((item, index) =>(
                <li key={index}>
                  <NavLink href='/about' title={item.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
