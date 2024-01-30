"use client";
import { Fragment, useContext, useEffect } from "react";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

/*function NavItems({ isModalView = false, isAdminView, router }) {


  return (
    <div
      className={`items-center justify-between w-full md:flex md:w-auto ${isModalView ? "" : "hidden"
        }`}
      id="nav-items"
    >
      <ul
        className={`flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${isModalView ? "border-none" : "border border-gray-100"
          }`}
      >
        {isAdminView
          ? adminNavOptions.map((item) => (
            <li
              className="cursor-pointer text-red-700 rounded hover:text-pink-400 transition md:p-0"
              key={item.id}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </li>
          ))
          : navOptions.map((item) => (
            <li
              className="cursor-pointer  text-red-700 rounded hover:text-pink-400 transition md:p-0"
              key={item.id}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </li>
          ))}
      </ul>
    </div>
  );
}*/

export default function Navbar() {
    const isAuthUser = false;
      /*const { showNavModal, setShowNavModal } = useContext(GlobalContext);
  const {
    user,
    isAuthUser,
    setUser,
    setIsAuthUser,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
    showCartModal,
    setShowCartModal
  } = useContext(GlobalContext);

  const pathName = usePathname();
  const router = useRouter();



  useEffect(() => {
    if (
      pathName !== "/admin-view/add-product" &&
      currentUpdatedProduct !== null
    )
      setCurrentUpdatedProduct(null);
  }, [pathName]);

  function handleLogout() {
    setIsAuthUser(false);
    setUser(null);
    Cookies.remove("token");
    localStorage.clear();

  }

  const isAdminView = pathName.includes("admin-view");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 450));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  const handleButtonClick = () => {
    
    setShowNavModal((prevState) => !prevState);
  }*/
  return (
    <>
    
      <nav className="bg-blue-200 fixed w-full z-20 top-0 left-0 border-b border-gray-100 ">

        <div className="max-w-screen-xl flex space-x-6  items-center justify-between mx-auto p-4">
          <div
            onClick={() => router.push("/")}
            className="flex items-center cursor-pointer"
          >
            <a src="" className="text-center text-red-700 hover:text-pink-400 transition relative"  >CODEZEN</a>
          </div>
          

          {/*{loading ? null : isAuthUser && !isAdminView ? (*/}
            <Fragment>
              <div className="flex items-center justify-between space-x-4">
                
                
                <Link
                  href=""
                  className="text-center text-red-700 hover:text-pink-400 transition relative"
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
                "text-red-700 hover:text-pink-400 transition"
              }
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className={
                "text-red-700 hover:text-pink-400 transition"
              }
            >
              Login/Register
            </button>
          )}
          {/*<button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-red-700 dark:focus:ring-gray-600"
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