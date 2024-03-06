import React, { useState } from "react"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { UUID } from "bson"
const Navbar = () => {
  const { status, data } = useSession()
  const [loggingOut, setLoggingOut] = useState(false)

  const handleSignout = async () => {
    setLoggingOut(true)
    await signOut()
    setLoggingOut(false)
  }
  return (
    <div className="flex items-center w-full p-4 py-2 bg-gradient-to-r from-nav via-violet-600 to-violet-700">
      
      <div className="hidden md:block z-10 text-2xl font-bold px-3 md:px-4 py-2 text-center text-[#fafbfb] hover:text-white  transition duration-600   relative">
        <Link href="/">
          CodeZen
        </Link>
      </div>
      <div className="cursor-pointer space-x-4 items-center justify-center sm:justify-around md:justify-end w-full md:ml-auto flex">
        <Link href="/" className="z-10 px-3 md:px-4 py-2 text-center text-[#78c5f4] hover:text-white  transition duration-600   relative">
          
            Home
          
        </Link>
        {status === "authenticated" && (
          <>
            <Link href="/dashboard" className="z-10 px-3 md:px-4 py-2 text-center text-[#78c5f4] hover:text-white  transition duration-600   relative">

                Dashboard
              
            </Link>
            
          </>
        )}
        {status === "authenticated" ? (
          <button
            className={` z-10 px-3 md:px-4 py-2 text-center text-[#78c5f4] hover:text-white  transition duration-600   relative
            ${loggingOut && "opacity-50"}`}
            onClick={handleSignout}
            disabled={loggingOut}
          >
            {loggingOut ? (
              <div className="flex justify-center">
                <svg className="h-6 mr-2 w-6 animate-spin" viewBox="3 3 18 18">
                  <path
                    className="fill-gray-800"
                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                  ></path>
                  <path
                    className="fill-gray-100"
                    d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                  ></path>
                </svg>
                <p className="text-md">Logging Out...</p>
              </div>
            ) : (
              "Log Out"
            )}
          </button>
        ) : (
          <>
            <Link href="/auth/login" className="z-10 px-3 md:px-4 py-2 text-center text-[#78c5f4] hover:text-white  transition duration-600   relative">
              
                Log In
              
            </Link>
            <Link href="/auth/signup" className="z-10 px-3 md:px-4 py-2 text-center text-[#78c5f4] hover:text-white  transition duration-600   relative">
              
                Sign Up
              
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
