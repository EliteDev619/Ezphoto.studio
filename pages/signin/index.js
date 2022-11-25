import React, { useState } from "react";
import Link from 'next/link'
import Login from '../Login'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const [username, setUsername] = useState('');
  
  const changeToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav className="bg-white">
      <div className=" mx-auto px-2 sm:px-6 lg:px-8 py-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => changeToggle()}>
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <a className="text-black text-4xl font-black" alt="Hactivist">ezphoto.studio</a>
            </div>
            <div className="cw:hidden cw:ml-6">
              <div className="flex space-x-4">
                <Link href="/">
                  <a href="#" className="text-black-300 bg-gray-100  hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-xl font-medium">
                    Our Work
                  </a>
                </Link>
                <Link href="/pricing">
                  <a href="#" className="text-black-300 bg-gray-100 hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-xl font-medium">
                    Pricing
                  </a>
                </Link>
                <Link href="/about">
                  <a href="#" className="text-black-300 bg-gray-100 hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-xl font-medium">
                    About
                  </a>
                </Link>
                <Link href="/book">
                  <a href="#" className="text-black-300 bg-gray-100 hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-xl font-medium">
                    Book
                  </a>
                </Link>
                <Link href="/contact">
                  <a href="#" className="text-black-300 bg-gray-100 hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-xl font-medium">
                    Contact
                  </a>
                </Link>
                {
                  (username == 'admin' ? <Link href="/adminpage">
                  <a href="#" className="text-black-300 bg-gray-100 hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-xl font-medium">
                    Admin
                  </a>
                </Link> : '')
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <Login setUsername={setUsername} />

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={`${toggle ? 'sm:hidden' : 'hidden sm:hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 text-right">
          <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <span>asdfasdfasdf </span>
            <span>$Data</span>
          </span>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => depositToWallet()}>Staking</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => onConnectWallet()}>
            asdfasdf
          </a>
        </div>
      </div>
    </nav >
  )
}

export default Navbar;