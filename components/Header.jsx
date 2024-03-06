import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
        <div className="flex justify-center items-center w-full p-4 py-2 bg-gradient-to-r from-nav via-violet-600 to-violet-700">
      <div className="md:hidden z-10 text-2xl font-bold px-3 md:px-4 py-2 text-center text-[#fafbfb] hover:text-white  transition duration-600 ">
        <Link href="/">
          CodeZen
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Header
