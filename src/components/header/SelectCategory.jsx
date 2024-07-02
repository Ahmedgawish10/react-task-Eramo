import { useState } from 'react';
import { RiMenuFold2Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const SelectCategory = () => {
  const [selectedOption, setSelectedOption] = useState('os'); 

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); 
  };

  return (
    <div className="relative inline-block ms-5  ">
      <select
        id="languageSelect"
        className="appearance-none bg-[#E30613]   px-4 py-2 pr-10 focus:outline-none ps-[2rem] cursor-pointer rounded-lg"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="cat" className='bg-white text-black'>Browse Category </option>
        <option value="rice" className='bg-white text-black'>Rices</option>
        <option value="cheken" className='bg-white text-black'>Chekines</option>

      </select>
      <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
      <RiMenuFold2Line />
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
      <IoIosArrowDown />

      </div>
    </div>
  );
};

export default SelectCategory;
