import Link from 'next/link'
import React from 'react'

interface LinkInterface {
  href: string;
  title: string;
}

const NavLink = ({href, title}: LinkInterface) => {
  // console.log(href);
  
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 text-[#A4C0E0] sm:text-xl rounded md:p-0 hover:text-secondary hover:bg-transparent">
      {title}
    </Link>
  )
}

export default NavLink
