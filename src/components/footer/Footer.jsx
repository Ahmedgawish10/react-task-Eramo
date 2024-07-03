import React from 'react'
import ImgLogo2 from '../../assets/logo2.png'
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { MdOutlineFacebook } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

import "./footer.css"
function Footer() {
    return (
        <div className="footer bg-[#232323]">
            <div className="cont w-[90%] mx-auto">
                <footer className=" text-white">
                    <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                        <div className="sm:flex sm:items-center sm:justify-between">
                        </div>

                        <div
                            className="grid grid-cols-1  gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16"
                        >
                            <div>
                                <p className="font-medium text-white">
                                    <img src={ImgLogo2} alt="" />

                                </p>
                                <p className="font-medium text-white">
                                    Download App

                                </p>

                            </div>

                            <div>
                                <p className="font-medium text-white">Service us</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75"> About Us </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75"> Contact us</a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75"> Privacy policy </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75"> Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75"> FAQ</a>
                                    </li>
                                    <li>
                                    <button className="button flex gap-2 items-center justify-center" >
                                        <span >Become a Vendor</span>
                                    </button>                       
                                   </li>
                                   <li>
                                        <span className='flex gap-2'>
                                            <a href="#" className="text-white transition hover:opacity-75"> <MdOutlineFacebook className='text-2xl text-[#1f1fff]' />     </a>
                                            <a href="#" className="text-white transition hover:opacity-75"> <FaSquareInstagram className='text-2xl text-[#405DE6]' />   </a>
                                            <a href="#" className="text-white transition hover:opacity-75"> <FaSquareTwitter className='text-2xl text-[#386aff]' />   </a>
                                            <a href="#" className="text-white transition hover:opacity-75"> <IoLogoYoutube className='text-2xl text-[#ff2424] ' />   </a>

                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-medium text-white">Our Company</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75"> All Products</a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75"> All orders</a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75">Payment Methods </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75"> Blog</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-medium text-white">Store Infomation</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <span className='flex gap-2'>
                                            <a href="#" className="text-white transition hover:opacity-75"> <CiLocationOn className='text-2xl' />            </a>
                                            <a href="#" className="text-white transition hover:opacity-75"> Megashop - Demo Store 570 - Union Trade Center</a>

                                        </span>
                                    </li>
                                    <li>
                                        <span className='flex gap-2'>
                                            <a href="#" className="text-white transition hover:opacity-75"> <LuPhone className='text-2xl' />            </a>
                                            <a href="#" className="text-white transition hover:opacity-75"> + 02 1300000000</a>

                                        </span>
                                    </li>

                                    <li>
                                        <span className='flex gap-2'>
                                            <a href="#" className="text-white transition hover:opacity-75"> <CgMail className='text-2xl' />            </a>
                                            <a href="#" className="text-white transition hover:opacity-75"> contact@bellout.com</a>

                                        </span>
                                    </li>
                                    <li>
                                        <a href="#" className="text-white transition hover:opacity-75 pt-5"> We Are Ready To Help!</a>
                                        <div className="wrap pt-2">
                                            <div className="search">
                                                <input type="text" className="searchTerm" placeholder="Enter Your Emai..." />
                                                <button type="submit" className="searchButton text-[12px]">
                                                    SUBSCRIBE
                                                </button>
                                            </div>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-xs text-white text-center">&copy;  Copyright 2024 Bellout | Developed by <span className='text-[#FFC436]'> e-RAMO For Digital Solutions</span></p>
                    </div>
                </footer>

            </div>
        </div>
    )
}

export default Footer