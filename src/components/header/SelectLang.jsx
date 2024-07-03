import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import ImgEarth from '../../assets/earth.png'

const SelectLang = () => {
  const [selectedOption, setSelectedOption] = useState('os'); 

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); 
  };

  return (
    <div className="relative inline-block ms-5  ">
      <select
        id="languageSelect"
        className="appearance-none bg-[#ffffff]   px-2 py-2 pr-10 focus:outline-none ps-[2rem] cursor-pointer rounded-lg"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="en" className='bg-white text-black'>English </option>
        <option value="ar" className='bg-white text-black'>Arabic</option>
        <option value="fr" className='bg-white text-black'>Arabic</option>

      </select>
      <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
      <img src={ImgEarth} alt="" />
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
      <IoIosArrowDown />

      </div>
    </div>
  );
};

export default SelectLang;
