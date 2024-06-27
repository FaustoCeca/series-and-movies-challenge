import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
  <nav
    className='flex justify-center space-x-4 p-4 bg-gray-800 text-white'
  >
    <Link href="/">
      Home
    </Link>
    <Link href="/series">
      Series
    </Link>
    <Link href="/movies">
      Movies
    </Link>
  </nav>
  )
}

export default Navbar;