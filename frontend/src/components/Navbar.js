import React from 'react'
import Container from './Container'
import { Link } from'react-router-dom'
import SearchFilter from './header/SearchFilter'

function Navbar() {
  return (
	<Container className="">
    <nav className="rounded-xl p-4 flex flex-row justify-between">
        <div className="flex flex-row gap-x-4 items-center relative">
		<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="200"
      height="50"
    >
      <text
        x="0"
        y="40"
        font-family="Arial"
        font-size="40"
        font-weight="bold"
        fill="#3e3e3e"
      >
        c
        <tspan fill="#ff4d4d">o</tspan>
        m
        <tspan fill="#ff9900">m</tspan>
        <tspan fill="#0099ff">e</tspan>
        r
        <tspan fill="#33cc33">c</tspan>
        o
      </text>
    </svg>
          {/* <img src="/images/logo.png" alt='logo'  className="h-[40px] object-contain md:block hidden cursor-pointer" /> */}

          <div className="border-l h-7 rounded" />

          {/* <Categories /> */}
        </div>
        <div className="flex flex-row gap-x-2 relative">
          {/* {user && Object?.keys(user)?.length > 0 && (
            <button
              className="p-2 rounded-secondary hover:bg-slate-100 transition-colors"
              onClick={() => window.open("/dashboard", "_self")}
            >
              <Dashboard className="h-6 w-6" />
            </button>
          )} */}
          <SearchFilter />
          {/* <Auth /> */}
          {/* <MyCart /> */}
        </div>
      </nav>
    </Container>
  )
}

export default Navbar