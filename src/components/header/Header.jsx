import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import React, { useState } from 'react';

import ImgLogo from '../../assets/logo1-header.png'
import ImgEarth from '../../assets/earth.png'
import ImgMan from '../../assets/man.png'

import "./header.css"
function Header() {
   
  return (
    <div className='header'>
<div className="contaoner1 w-[90%] mx-auto pt-[1rem]">

<header className="bg-white">
  <div className="mx-auto flex h-16 items-center gap-8 ">
    <a className="block text-teal-600" href="#">
      <span className="sr-only">Home</span>
      <img src={ImgLogo} alt="" />
    </a>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-[#232323] transition hover:text-gray-500/75 border-gray-300 " href="#"> <span className='border-r pe-[1.5rem]'>Contact Us</span> </a>
          </li>

          <li>
            <a className="text-[#232323] transition hover:text-gray-500/75 flex items-center gap-x-2  border-gray-300 " href="#"> <MdOutlineMailOutline /> 
            <span className='border-r pe-[1.5rem]'>contact@bellout.com</span> </a>
          </li>

          <li>
          <a className="text-[#232323] transition hover:text-gray-500/75 flex items-center gap-x-2  " href="#"> <FiPhone />
          <span >+ 02 1300000000</span> </a>
          </li>

        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4 items-center">
            <label htmlFor="option1" className="cursor-pointer"><img src={ImgEarth} alt="" /></label>
        <select id="option1" className="cursor-pointer border-none focus:border-none">
        <option>English</option>
        <option>Arabic</option>
        <option>france</option>
      </select>
        
{/*  */}
          <a
            className="vendor-button flex items-center gap-3  rounded-md bg-[#E30613]   px-5 py-2.5 text-sm font-medium text-white transition hover:text-teal-600/75 "
            href="#"
          >
            <span><img src={ImgMan} alt="" /></span>
            <span className="pt-[5px] ">  BECOME A VENDOR </span>

        </a>
        </div>

        <button
          className=" rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 hidden "
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
</div>


        
    </div>
  )
}

export default Header