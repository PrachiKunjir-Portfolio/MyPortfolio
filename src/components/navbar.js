import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="bg-transperant">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center">
            <a href="/" className="text-white flex-shrink-0 font-poppins">
              Home
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  className="text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  to="/education"
                >
                  Education
                </Link>
                <Link
                  className="text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  to="/work"
                >
                  Work
                </Link>
                <Link
                  className="text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  to="/projects"
                >
                  Projects
                </Link>
                <Link
                  className="text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="-mr-2 flex md:hidden">

          </div> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
