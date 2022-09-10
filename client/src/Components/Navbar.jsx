import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { logOut } from '../Actions/AuthAction'

const Navbar = () => {
   
  const dispatch = useDispatch()
  const user = useSelector((state)=> state.authReducer.authData)

  const [open, setOpen] = React.useState(false);

  return (
    <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
      >
       <div>
          <a href="/">
            <p className="text-3xl font-bold text-purple-700 cursor-pointer hover:text-purple-400">Quiz System</p>
          </a>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={()=>{setOpen(prev=>!prev)}}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Features</a
              >
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Pricing</a
              >
            </li>
            <li>
            {!user ? <a
                className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="/auth"
                >Log In / Sign Up</a
              > :
              <a
                className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="/"
                onClick={()=> dispatch(logOut())}
                >Log Out</a
              >}
            </li>
          </ul>
        </div>
        {open && <div className="w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Features</a
              >
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                >Pricing</a
              >
            </li>
            <li>
              {!user ? <a
                className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="/auth"
                >Log In / Sign Up</a
              > :
              <a
                className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="/"
                onClick={()=> dispatch(logOut)}
                >Log Out</a
              >}
            </li>
          </ul>
        </div>}
    </nav>
  )
}

export default Navbar