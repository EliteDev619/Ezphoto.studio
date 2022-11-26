import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Login from '../Login'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState('');
  const [username, setUsername] = useState('');

  const changeToggle = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    setToggle(false);
  }, [navbar])

  const linkList = [
    {
      title: 'Our Work',
      url: '/'
    },
    {
      title: 'Pricing',
      url: '/pricing'
    },
    {
      title: 'About',
      url: '/about'
    },
    {
      title: 'Book',
      url: '/book'
    },
    {
      title: 'Contact',
      url: '/contact'
    },
  ]

  const SetLinkList = ({ title, url, index, isMobile }) => {

    return (
      <Link href={url} key={index}>
        <a href="#" className={(navbar.title == title ? "bg-gray-700 text-white " : '') + " hover:bg-gray-700 hover:text-white block  px-3 py-2 rounded-md text-lg font-medium"} onClick={() => setNavbar({ title })} >{title}</a>
      </Link>
    )
  }

  return (
    <nav className="bg-white">
      <div className=" mx-auto px-12 cw:px-6 py-6">
        <div className='h-18 flex justify-between'>
          <div><a className="text-black text-4xl font-black" alt="Hactivist">ezphoto.studio</a></div>
          <div>
            <div className="cw:hidden cw:ml-6">
              <div className="flex space-x-4">
                {linkList.map(({ title, url }, index) => (
                  <SetLinkList title={title} index={index} url={url} isMobile={false} key={index} />
                ))}
                {
                  (username == 'admin' ? <Link href="/admin">
                    <a href="#" className={(navbar == 'Admin' ? "bg-gray-700 text-white " : '') + " hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-xl font-medium"} onClick={() => setNavbar('Admin')}>
                      Admin
                    </a>
                  </Link> : '')
                }
              </div>
            </div>
            <button type="button" className="hidden cw:block inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => changeToggle()}>
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Login setUsername={setUsername} />

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={`${toggle ? 'sm:hidden' : 'hidden sm:hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 text-center">
          {linkList.map(({ title, url }, index) => (
            <SetLinkList title={title} index={index} url={url} isMobile={true} key={index} />
          ))}
          {
            (username == 'admin' ? <Link href="/admin">
              <a href="#" className={(navbar == 'Admin' ? "bg-gray-700 text-white " : '') + " hover:bg-gray-700 hover:text-black px-3 py-2 rounded-md text-xl font-medium"} onClick={() => setNavbar('Admin')}>
                Admin
              </a>
            </Link> : '')
          }
        </div>
      </div>
    </nav >
  )
}

export default Navbar;