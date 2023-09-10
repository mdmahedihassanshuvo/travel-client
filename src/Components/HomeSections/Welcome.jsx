import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className='flex justify-center md:gap-16 items-center md:mx-16 md:mb-16'>
            <div className='md:w-1/2 md:flex md:justify-end'>
                <img className='md:w-[412px] md:h-[348px] rounded-lg' src="https://i.ibb.co/7QnGvhj/about.jpg" alt="" />
            </div>
            <div className='md:w-3/6 space-y-3'>
                <p className='text-[#86b817]'>About Us</p>
                <h3 className='text-[#2C3E50] text-3xl font-semibold'>Welcome to <span className='text-[#86B817]'>Tourist</span></h3>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                    eos. Clita erat ipsum et lorem et sit.</p>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                    eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore
                    erat amet</p>
                <div className='grid grid-cols-2'>
                    <p className='flex items-center md:gap-10'><FaArrowRight className='text-[#86b817]'/> First Class Flights</p>
                    <p className='flex items-center md:gap-10'><FaArrowRight className='text-[#86b817]'/> 5 Star Accommodations</p>
                    <p className='flex items-center md:gap-10'><FaArrowRight className='text-[#86b817]'/> 150 Premium City Tours</p>
                    <p className='flex items-center md:gap-10'><FaArrowRight className='text-[#86b817]'/> Handpicked Hotels</p>
                    <p className='flex items-center md:gap-10'><FaArrowRight className='text-[#86b817]'/> Latest Model Vehicles</p>
                    <p className='flex items-center md:gap-10'><FaArrowRight className='text-[#86b817]'/> 24/7 Service</p>
                </div>
                <button className='btn bg-[#86b817] hover:bg-amber-500 text-white'><Link to='/about'>Read More</Link></button>
            </div>
        </div>
    );
};

export default Welcome;