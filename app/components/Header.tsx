import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="bg-primary">
        <div className="flex flex-row items-center justify-between m-auto container bg-primary">
          <Link className="text-white" href="/">
            Thiri Shwe Sin
          </Link>
          <div className="flex flex-row gap-3 p-3">
            <Link
              href="/"
              className="text-white btn btn-ghost hover:border-dotted hover:border-white"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-white btn btn-ghost hover:border-dotted hover:border-white"
            >
              Projects
            </Link>
            <Link
              href="/"
              className="text-white btn btn-ghost hover:border-dotted hover:border-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
