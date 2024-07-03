import React, { useState } from "react";
import "./header.css";
import { RiMenuFoldLine } from "react-icons/ri";
import ImgArrow from "../../assets/arrow.png";
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { TfiShareAlt } from "react-icons/tfi";
import { TiThMenu } from "react-icons/ti";
import { RiCloseFill } from "react-icons/ri";
import ImgLogo from '../../assets/logo1-header.png'
import SelectCategory from "./SelectCategory";

function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="main-header sticky top-0 z-40  bg-white">
      <header className="relative bg-white w-[90%] mx-auto pt-[1rem] border-b-2">
        <div className="mx-auto flex h-16  items-center justify-between gap-8  ">
          <a className="block text-white" href="#">
            <div className="select flex">
              <div className=" main-logo hidden  text-teal-600" href="#">
                <img src={ImgLogo} alt="" />
              </div>
              <SelectCategory />
            </div>
          </a>

          <div className="nav-box flex-1">
            <div className={`nav-content flex flex-1 items-center  md:justify-between overflow-hidden ${isMenuOpen ? 'show ' : 'hide'} `}>
              <div className={`overlay  relative top-0 bottom-0 left-[0%] `}>
                <nav aria-label="Global" className=" md:block ">
                  <ul className="flex items-center gap-4 text-sm">
                    <li>
                      <a
                        className="home text-[#E30613] transition hover:text-gray-500/75 font-semibold text-[20px]"
                        href="#"
                      >
                        Home
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-[#232323] transition hover:text-gray-500/75 font-semibold text-[20px]"
                        href="#"
                      >

                        About Us
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-[#232323] transition hover:text-gray-500/75 font-semibold text-[20px]"
                        href="#"
                      >
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-[#232323] transition hover:text-gray-500/75 font-semibold text-[20px]"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>

                    <li>
                      <div className="search-box">
                        <button className="btn-search flex justify-center items-center">
                          <CiSearch />
                        </button>
                        <input
                          type="text"
                          className="input-search"
                          placeholder="Search your product..."
                        />
                      </div>
                    </li>
                  </ul>
                </nav>

                <div className="right flex items-center justify-end gap-4  flex-1">
                  <div className=" flex sm:gap-4">
                    <span className="border-r pe-2 cursor-pointer relative">
                    <span className="bg-[#3771C8] w-5 h-5 rounded-full  absolute top-[-12px] right-0 text-center text-white text-sm count">2</span>

                      <GoBell className="text-2xl text-[#E30613]" />
                    </span>
                    <span className="border-r pe-2 cursor-pointer relative">
                      <span className="bg-[#3771C8] w-5 h-5 rounded-full  absolute top-[-12px] right-0 text-center text-white text-sm count">4</span>
                      <IoCartOutline className="text-2xl text-[#E30613]" />
                    </span>
                    <span className="border-r pe-2 cursor-pointer relative">
                      <span className="bg-[#3771C8] w-5 h-5 rounded-full  absolute top-[-12px] right-0 text-center text-white text-sm count">6</span>
                      <TfiShareAlt className="text-2xl text-[#E30613]" />
                    </span>
                    <span className="border-r pe-2 cursor-pointer relative">
                      <BsPerson className="text-2xl text-[#E30613]" />
                    </span>
                    <div className="cursor-pointer flex  items-center">
                      <a href="">Login</a>
                    </div>
                  </div>
                </div>


              </div>



            </div>


            <button
              className="menu-icon block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <RiCloseFill className="text-xl" />
              ) : (
                <TiThMenu className="text-xl" />
              )}
            </button>

          </div>
        </div>
      </header>
    </div>
  );
}

export default MainHeader;
