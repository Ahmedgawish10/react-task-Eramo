import React, { useState } from 'react';
import './bestproducts.css';
import ImgBest1 from '../../assets/phone1.png';
import ImgBest2 from '../../assets/phone2.png';
import ImgBest3 from '../../assets/phone3.png';
import ImgBest4 from '../../assets/phone4.png';
import { MdOutlineMenuOpen } from "react-icons/md";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { TfiShareAlt } from 'react-icons/tfi';
import { FaRegHeart } from 'react-icons/fa';
import { IoStarSharp } from 'react-icons/io5';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function BestProducts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
        
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
        
      },
    ],
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };
  const products = [
    {
      image: ImgBest1,
      name: 'Product Name 1',
      stars: 4,
      reviews: 332,
      price: 500,
      originalPrice: 600,
    },
    {
      image: ImgBest2,
      name: 'Product Name 2',
      stars: 4,
      reviews: 332,
      price: 500,
      originalPrice: 600,
    },
    {
      image: ImgBest3,
      name: 'Product Name 3',
      stars: 4,
      reviews: 332,
      price: 500,
      originalPrice: 600,
    },
    {
      image: ImgBest4,
      name: 'Product Name 4',
      stars: 4,
      reviews: 332,
      price: 500,
      originalPrice: 600,
    },
  ];

  return (
    <div className="best-Products pt-[4rem] mb-[5rem]" id="best-Products ">
      <div className="container1 w-[90%] mx-auto">
        <header className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <a className="block text-[#232323]" href="#">
                  <span className="text-[20px] font-semibold">Best Seller Products</span>
                </a>
              </div>

              <div className="md:flex md:items-center relative">
                <nav aria-label="Global" className={`hidden md:block ${isMenuOpen ? 'show1' : 'hide'} `}>
                  <ul className="flex items-center gap-6 text-sm justify-end">
                    <li>
                      <a
                        className={`font-semibold ${
                          selectedItem === null ? 'text-red-500 border-b-2 border-solid border-red-500 pb-[10px]' : 'text-gray-500'
                        } transition hover:text-gray-500/75`}
                        href="/#best-Products"
                        onClick={() => handleItemClick(null)}
                      >
                        Phones
                      </a>
                    </li>

                    <li>
                      <a
                        className={`font-semibold ${
                          selectedItem === 1 ? 'text-red-500 border-b-2 border-solid border-red-500 pb-[10px]' : 'text-gray-500'
                        } transition hover:text-gray-500/75`}
                        href="/#best-Products"
                        onClick={() => handleItemClick(1)}
                      >
                        Grocery
                      </a>
                    </li>

                    <li>
                      <a
                        className={`font-semibold ${
                          selectedItem === 2 ? 'text-red-500 border-b-2 border-solid border-red-500 pb-[10px]' : 'text-gray-500'
                        } transition hover:text-gray-500/75`}
                        href="/#best-Products"
                        onClick={() => handleItemClick(2)}
                      >
                        Baby Care
                      </a>
                    </li>

                    <li>
                      <a
                        className={`font-semibold ${
                          selectedItem === 3 ? 'text-red-500 border-b-2 border-solid border-red-500 pb-[10px]' : 'text-gray-500'
                        } transition hover:text-gray-500/75`}
                        href="/#best-Products"
                        onClick={() => handleItemClick(3)}
                      >
                        Skin care
                      </a>
                    </li>

                    <li>
                      <a
                        className={`font-semibold ${
                          selectedItem === 4 ? 'text-red-500 border-b-2 border-solid border-red-500 pb-[10px]' : 'text-gray-500'
                        } transition hover:text-gray-500/75`}
                        href="/#best-Products"
                        onClick={() => handleItemClick(4)}
                      >
                        Electronics
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="flex items-center gap-4">
                  <div className="block md:hidden" onClick={toggleMenu}>
                    <button className="rounded  p-2 text-gray-600 transition hover:text-gray-600/75">
                    <MdOutlineMenuOpen className='text-2xl'/>

                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Best Products */}
        <div className="cards-products gap-5 ">
          <Slider {...settings} className="slick-slider cursor-pointer">
            {products.map((product, index) => (
              <div
                key={index}
                className={`Card px-2 py-5 ${
                  selectedItem === index ? 'border-b-2 border-solid border-red-500' : ''
                }`}
                onClick={() => handleItemClick(index)}
              >
                {index === 0 && (
                 <div className="ribbon">
                 <span className="ribbon__content">FEATURED</span>
               </div>
                )}
                   {index === 1 && (
                    <>
                    <div className="ribbon">
                 <span className="ribbon__content">FEATURED</span>
               </div>
               
                <span className='discount-percentage2  absolute right-0 top-0'> 15% OFF    </span>  

               </>
                
                )}


                
                <div className="img flex justify-center">
                  <img src={product.image} alt="" width="300px" height="200px" />
                </div>
                <div className="product-name text-[18px] font-medium">{product.name}</div>
                <div className="review flex justify-between items-center gap-4" >
                  <div className="count text-[#235BA9]">({product.reviews})</div>
                  <div className="progress w-[100px] h-[4px] bg-gray-400  relative rounded" ></div>
                  <div className="stars flex gap-1 ">
                    {[...Array(product.stars)].map((star, i) => (
                      <IoStarSharp key={i} className="text-yellow-400" />
                    ))}
                    <IoStarSharp className="text-red-500 " />
                  </div>
                </div>
                <div className="discount flex items-center smd:justify-normal gap-6 pb-4">
                  <span className="text-[22px] sm:text-[20px] text-[#E30613] font-semibold">{product.price} EGP</span>
                  <span className="text-[18px] sm:text-[22px] text-[#232323] price-original relative">
                    {product.originalPrice} EGP
                  </span>
                </div>
                <div className="icons flex gap-7 justify-between px-4">
                  <AiOutlineShoppingCart className="text-red-500 text-[20px]" />
                  <TfiShareAlt className="text-[20px]" />
                  <FaRegHeart className="text-[20px]" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default BestProducts;
