import React from 'react'
import ImgHero from '../../assets/hero-img.png'
import ImgHero2 from '../../assets/hero-img2.png'
import ImgHero3 from '../../assets/hero-img3.png'
import ImgHero4 from '../../assets/hero-img4.png'
import ImgHero5 from '../../assets/hero-img5.png'
import ImgHero6 from '../../assets/hero-img6.png'

import { IoMdArrowForward } from "react-icons/io";

import "./hero.css";

function Hero() {
    return (
        <div className='hero-section pt-[4rem]'>
            <div className="container1 w-[90%] mx-auto">
                {/* large boxs hero */}
                <div className="hero-boxs flex gap-4 overflow-hidden">
                    <div className="box1  p-[2rem] rounded-lg   relative animated-element2 animate2">
                        <div className="box1-left flex items-center ">
                            <div className="center text-center sm:text-center md:text-left">
                                <div className="title text-[25px] font-semibold">Enjoy</div>
                                <div className="product-title text-[30px] sm:text-[46px] text-[#E30613] font-semibold ">Rehana</div>
                                <div className="product-desc w-[75%] text-[18px] pb-[2rem]">
                                    A wonderful and unique collection
                                    of home and office furniture pieces
                                    with distinct details and customized
                                    only for your aspirations and ideas
                                </div>
                                <div className="discount flex items-center justify-center sm:justify-center md:justify-normal gap-6 pb-4">
                                    <span className='text-[22px] sm:text-[33px] text-[#E30613] font-semibold'>50,00 EGP</span>
                                    <span className='text-[18px] sm:text-[22px] text-[#232323] price-original relative'>53,00 EGP</span>
                                </div>
                                <button className="button-82-pushable" role="button">
                                    <span className="button-82-shadow"></span>
                                    <span className="button-82-edge"></span>
                                    <span className="button-82-front text">
                                        ADD TO CART
                                    </span>
                                </button>
                            </div>

                        </div>
                        <div className="box1-right flex items-center justify-end">
                            <div className="img">
                                <img src={ImgHero} alt="" width="238px" />
                            </div>
                        </div>

                    </div>
                    {/* box2 */}
                    <div className="box2 px-[3rem] py-10 rounded-lg animated-element3 animate3  text-center sm:text-center md:text-left lg:text-left">
                        <div className="box2-container ">
                            <div className="product-title text-[24px] text-[#E30613] font-semibold md:w-[200px] ">ABRIL</div>
                            <div className="product-desc text-[18px] pb-[1rem] ">
                                A wonderful and unique
                                of home and office furniture
                                with distinct details.
                            </div>
                            <div className="text-center md:text-center pb-[1rem]">
                                <span className=' discount-percentage'> 15% OFF    </span>
                            </div>


                            <div className="img flex md:justify-center justify-center pb-5">
                                <img src={ImgHero2} alt="" width="120px" />
                            </div>
                            <div className="text-left md:text-center flex justify-center sm:justify-center">
                                <button className="button flex gap-2 items-center">
                                    <span>ADD TO CART</span>
                                    <span><IoMdArrowForward /></span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

                {/* mini boxs hero */}
                <div className="hero-boxs-mini pt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-center gap-4">
                    <div className="box12 py-5 rounded-lg flex items-center justify-center ">
                        <div className="box2-container flex">
                            <div className="img flex justify-center">
                                <img src={ImgHero3} alt="" />
                            </div>
                            <div className="content">
                                <div className="title text-center lg:pe-2">
                                    A wonderful and
                                    of home and office</div>
                                <div className='flex justify-center'>  <span className=' discount-percentage my-3 '> 15% OFF    </span>  </div>
                                <div className="add-cart flex justify-center pt-2">
                                    <button className="button flex gap-2 items-center justify-center" >
                                        <span>ADD TO CART</span>
                                        <span><IoMdArrowForward /></span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="box12 py-5 rounded-lg flex items-center justify-center ">
                        <div className="box2-container flex">
                            <div className="img flex justify-center">
                                <img src={ImgHero4} alt="" />
                            </div>
                            <div className="content">
                                <div className="title text-center lg:pe-2">
                                    A wonderful and
                                    of home and office</div>
                                <div className='flex justify-center'>  <span className=' discount-percentage my-3 '> 15% OFF    </span>  </div>
                                <div className="add-cart flex justify-center pt-2">
                                    <button className="button flex gap-2 items-center justify-center" >
                                        <span>ADD TO CART</span>
                                        <span><IoMdArrowForward /></span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className="box12 py-5 rounded-lg flex items-center justify-center ">
                        <div className="box2-container flex">
                            <div className="img flex justify-center">
                                <img src={ImgHero5} alt="" />
                            </div>
                            <div className="content">
                                <div className="title text-center lg:pe-2">
                                    A wonderful and
                                    of home and office</div>
                                <div className='flex justify-center'>  <span className=' discount-percentage my-3 '> 15% OFF    </span>  </div>
                                <div className="add-cart flex justify-center pt-2">
                                    <button className="button flex gap-2 items-center justify-center" >
                                        <span>ADD TO CART</span>
                                        <span><IoMdArrowForward /></span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="box12 py-5 rounded-lg flex items-center justify-center ">
                        <div className="box2-container flex">
                            <div className="img flex justify-center">
                                <img src={ImgHero6} alt="" />
                            </div>
                            <div className="content">
                                <div className="title text-center lg:pe-2">
                                    A wonderful and
                                    of home and office</div>
                                <div className='flex justify-center'>  <span className=' discount-percentage my-3 '> 15% OFF    </span>  </div>
                                <div className="add-cart flex justify-center pt-2">
                                    <button className="button flex gap-2 items-center justify-center" >
                                        <span>ADD TO CART</span>
                                        <span><IoMdArrowForward /></span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>







        </div>
    )
}

export default Hero