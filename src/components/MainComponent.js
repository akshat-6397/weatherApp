import React from 'react';
import ImageAndText from './ImageAndText';
import { FiSearch } from "react-icons/fi";

const MainComponent = () => {
    return(
        <div className='border bg-zinc-600 border-white lg:w-1/3 md:w-1/3 sm:w-1/2 w-full border-solid p-5'>
            <div className='flex justify-center mt-5 relative'>
                <input className='p-2 text-black py-1 mr-30 bg-transparent border-b-2 outline-none  w-4/5' type='text' placeholder='Enter a City....' />
                <FiSearch className='bg-gray-950 rounded-full p-1 text-2xl shadow-2xl shadow-white text-white mt-1'></FiSearch>
            </div>
            <ImageAndText />
        </div>
    );
};

export default MainComponent;