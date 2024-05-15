"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ProfileIcon from "@/./public/assets/images/square-code.png";
import Image from "next/image";

const navLinks = [
  // {
  //   title: "Blogs",
  //   path: "blogs",
  // },
  // {
  //   title: "About",
  //   path: "/about",
  // },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Header = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  console.log(navBarOpen);
  

  return (
    <header className="sticky shadow shadow-cyan-400 top-0 left-0 right-0 bg-primary z-50">
      <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
        <Link
          className="text-2xl md:text-4xl text-secondary font-semibold"
          href="/"
        >
          <Image src={ProfileIcon} alt="Icon Image" width={50} height={50} />
        </Link>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className="text-gray-600 md:mr-12 hover:text-blue-600"
              >
                <NavLink href={item.path} title={item.title} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
