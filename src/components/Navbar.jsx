"use client";
import { Fragment, useContext, useEffect } from "react";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
    const isAuthUser = false;
      
  return (
    <>
    
      <nav className="bg-gradient-to-r from-nav via-violet-600 to-violet-500 fixed w-full z-20 top-0 left-0 border-b  border-white ">

        <div className="max-w-screen-xl flex space-x-6  items-center justify-between mx-auto p-4">
          <div
            onClick={() => router.push("/")}
            className="flex items-center cursor-pointer"
          >
            <a src="" className="text-center text-gray-200 hover:text-text_hover transition   relative"  >CODEZEN</a>
          </div>
          

          {/*{loading ? null : isAuthUser && !isAdminView ? (*/}
            <Fragment>
              <div className="flex items-center justify-between space-x-4">
                
                
                <Link
                  href=""
                  className="text-center text-gray-200 hover:text-text_hover transition   relative"
                >
                  <div className="text 2xl">
                    <i className="far fa-user" />
                  </div>
                  <div className="text-xs leading-3">Dashboard</div>
                </Link>
              </div>

            </Fragment>
          
          {isAuthUser ? (
            <button
              onClick={handleLogout}
              className={
                "text-gray-200 hover:text-text_hover transition  "
              }
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className={
                "text-gray-200 hover:text-text_hover transition  "
              }
            >
              Login/Register
            </button>
          )}
          {/*<button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-white dark:text-gray-200 dark:hover:bg-white dark:focus:ring-white"
            aria-controls="navbar-sticky"
            aria-expanded={showNavModal ? 'true' : 'false'}
            onClick={handleButtonClick}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            </button>*/}






        </div>



      </nav>
      {/*<CommonModal
        showModalTitle={false}
        mainContent={
          <NavItems
            router={router}
            isModalView={true}
            isAdminView={isAdminView}
          />
        }
        show={showNavModal}
        setShow={setShowNavModal}
      />
    {showCartModal && <CartModal />}*/}
    </>
  );
}