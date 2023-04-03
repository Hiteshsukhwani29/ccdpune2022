import { useState, useEffect } from 'react'
// import logo from '../../Images/logo.png';
import logoNav from '../../Images/logo-nav.png'
import { auth, logout, signInWithGoogle } from '../../services/UserAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Navigate } from 'react-router-dom'

export default function Navbar({ active, handleClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const [user] = useAuthState(auth)

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
  }, [])

  const toggleNav = () => setIsOpen(!isOpen)
  const mobileTabClickHandler = (tab) => {
    setIsOpen(false)
    handleClick(tab)
  }

  return (
    <>
      <nav
        className={`${
          scrolled ? 'shadow-lg bg-white/90' : ''
        } z-[100] fixed w-full fixed-top`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link to="/" className="flex items-center px-2 my-1.5">
                  <img src={logoNav} alt="Logo" className="w-80 mr-2" />
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-9">
              <div className="hidden md:flex items-center space-x-9">
                <div
                  role="button"
                  className={
                    active === 'Home'
                      ? 'py-3 px-2 text-g-blue-3 hover:text-blue-600 border-b-4 border-googleBlue transition duration-300 text-lg'
                      : 'py-3 px-2 text-g-gray-7 hover:text-g-gray-9 transition duration-300 text-lg'
                  }
                  // onClick={() => handleClick('Home')}
                >
                  Home
                </div>
                <div
                  role="button"
                  className={
                    active === 'Speakers'
                      ? 'py-3 px-2 text-g-blue-3 hover:text-blue-600 border-b-4 border-googleBlue transition duration-300 text-lg'
                      : 'py-3 px-2 text-g-gray-5 hover:text-g-gray-5 transition duration-300 text-lg'
                  }
                  // onClick={() => handleClick('Speakers')}
                >
                  Speakers
                </div>
                <div
                  role="button"
                  className={
                    active === 'Schedule'
                      ? 'py-3 px-2 text-g-blue-3 hover:text-blue-600 border-b-4 border-googleBlue transition duration-300 text-lg'
                      : 'py-3 px-2 text-g-gray-5 hover:text-g-gray-5 transition duration-300 text-lg'
                  }
                  // onClick={() => handleClick('Schedule')}
                >
                  Schedule
                </div>
              </div>
              {user ? (
                <>
                  <div className="ml-3 relative">
                    <div>
                      <button
                        type="button"
                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                        onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                      >
                        <span className="sr-only">Profile Menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.photoURL ? user.photoURL : ''}
                          alt=""
                        />
                      </button>
                    </div>
                    {profileMenuOpen ? (
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabIndex={-1}
                      >
                        <Link to="/ccd2022/dashboard" className="no-underline">
                          <button
                            // onClick={() => setProfileMenuOpen(false)}
                            className="block px-4 py-2 w-full text-sm text-gray-700  hover:bg-gray-100"
                            role="menuitem"
                            tabIndex={-1}
                            id="user-menu-item-1"
                          >
                            Dashboard
                          </button>
                        </Link>
                        <Link to="/ccd2022" className="no-underline">
                          <button
                            className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                            tabIndex={-1}
                            id="user-menu-item-2"
                            onClick={() => {
                              logout()
                              setProfileMenuOpen(false)
                            }}
                          >
                            Log Out
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <button
                  className="mt-1 py-1.5  bg-blue-600 hover:bg-blue-700 text-white  px-4 border border-blue-500 hover:border-transparent rounded text-lg hidden"
                  onClick={signInWithGoogle}
                >
                  Login
                </button>
              )}
            </div>

            <div className="md:hidden flex items-center content-center space-x-2 hidden">
              {user ? null : (
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white  px-3 border border-blue-500 hover:border-transparent rounded text-xs py-1"
                  onClick={signInWithGoogle}
                >
                  Login
                </button>
              )}
              <button
                className="outline-none mobile-menu-button"
                onClick={toggleNav}
              >
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`${isOpen === false ? 'hidden' : ''}`}>
          <ul className="bg-white border border-b-2 border-gray-200">
            <li className="active">
              <div
                role="button"
                className="block text-sm px-2 py-4 text-black font-semibold"
                onClick={() => mobileTabClickHandler('Home')}
              >
                Home
              </div>
              <div
                role="button"
                className="block text-sm px-2 py-4 text-black font-semibold"
                onClick={() => mobileTabClickHandler('Speakers')}
              >
                Speakers
              </div>
              <div
                role="button"
                className="block text-sm px-2 py-4 text-black font-semibold"
                onClick={() => mobileTabClickHandler('Schedule')}
              >
                Schedule
              </div>
            </li>
            {user ? (
              <>
                <hr />
                <li
                  onClick={() => {
                    setIsOpen(false)
                    setProfileMenuOpen(false)
                  }}
                >
                  <Link to="/ccd2022/dashboard" className="no-underline">
                    <p className="block text-sm px-2 py-4 text-black font-semibold">
                      Dashboard
                    </p>
                  </Link>
                </li>
                <li onClick={logout}>
                  <Link to="/ccd2022">
                    <p
                      className="block text-sm px-2 py-4 text-black font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      Log Out
                    </p>
                  </Link>
                </li>
              </>
            ) : (
              ''
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}
