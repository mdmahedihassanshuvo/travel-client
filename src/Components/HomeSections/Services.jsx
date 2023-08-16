import React from 'react';
import logo1 from '../../assets/img/1.png';
import logo2 from '../../assets/img/2.png';
import logo3 from '../../assets/img/3.png';
import logo4 from '../../assets/img/4.png';
const Services = () => {
    return (
        <div className='md:mb-16 md:mx-16'>
            <div className='text-center space-y-3 md:mb-10'>
                <p className='text-[#86b817] text-lg'>Services</p>
                <h3 className='text-3xl font-semibold'>Our Services</h3>
            </div>
            <div className='grid md:grid-cols-4 md:gap-10'>
                <div className='bg-[#F5F5F5] p-5 rounded shadow-xl'>
                    <img className='w-8 md:mb-4' src={logo1} alt="" />
                    <h2 className='text-lg font-semibold md:mb-2'>WorldWide Tours</h2>
                    <p>Diam elitr kasd sed at elitr sed
                        ipsum justo dolor sed clita amet
                        diam</p>
                </div>
                <div className='bg-[#F5F5F5] p-5 rounded shadow-xl'>
                    <img className='w-8 md:mb-4' src={logo2} alt="" />
                    <h2 className='text-lg font-semibold md:mb-2'>Hotel Reservation</h2>
                    <p>Diam elitr kasd sed at elitr sed
                        ipsum justo dolor sed clita amet
                        diam</p>
                </div>
                <div className='bg-[#F5F5F5] p-5 rounded shadow-xl'>
                    <img className='w-8 md:mb-4' src={logo3} alt="" />
                    <h2 className='text-lg font-semibold md:mb-2'>Travel Guides</h2>
                    <p>Diam elitr kasd sed at elitr sed
                        ipsum justo dolor sed clita amet
                        diam</p>
                </div>
                <div className='bg-[#F5F5F5] p-5 rounded shadow-xl'>
                    <img className='w-8 md:mb-4' src={logo4} alt="" />
                    <h2 className='text-lg font-semibold md:mb-2'>Event Management</h2>
                    <p>Diam elitr kasd sed at elitr sed
                        ipsum justo dolor sed clita amet
                        diam</p>
                </div>
                <div className='bg-[#F5F5F5] p-5 rounded shadow-xl'>
                    <img className='w-8 md:mb-4' src={logo1} alt="" />
                    <h2 className='text-lg font-semibold md:mb-2'>WorldWide Tours</h2>
                    <p>Diam elitr kasd sed at elitr sed
                        ipsum justo dolor sed clita amet
                        diam</p>
                </div>
                <div className='bg-[#F5F5F5] p-5 rounded shadow-xl'>
                    <img className='w-8 md:mb-4' src={logo2} alt="" />
                    <h2 className='text-lg font-semibold md:mb-2'>Hotel Reservation</h2>
                    <p>Diam elitr kasd sed at elitr sed
                        ipsum justo dolor sed clita amet
                        diam</p>
                </div>
                <div className='bg-[#F5F5F5] p-5 rounded shadow-xl'>
                    <img className='w-8 md:mb-4' src={logo3} alt="" />
                    <h2 className='text-lg font-semibold md:mb-2'>Travel Guides</h2>
                    <p>Diam elitr kasd sed at elitr sed
                        ipsum justo dolor sed clita amet
                        diam</p>
                </div>
                <div className='bg-[#F5F5F5] p-5 rounded shadow-xl'>
                    <img className='w-8 md:mb-4' src={logo4} alt="" />
                    <h2 className='text-lg font-semibold md:mb-2'>Event Management</h2>
                    <p>Diam elitr kasd sed at elitr sed
                        ipsum justo dolor sed clita amet
                        diam</p>
                </div>
            </div>
        </div>
    );
};

export default Services;