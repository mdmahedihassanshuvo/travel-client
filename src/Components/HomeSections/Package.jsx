import React from 'react';
import { FaCalendar, FaLocationDot, FaPerson, FaStar } from 'react-icons/fa6';

const Package = () => {
    return (
        <div className='md:mb-16 md:mx-16'>
            <div className='text-center space-y-3 md:mb-10'>
                <p className='text-[#86b817] text-lg'>Packages</p>
                <h3 className='text-3xl font-semibold'>Awesome Packages</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src='https://i.ibb.co/rcxtLSV/package-1.jpg' alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className='border border-t-0 border-l-0 border-r-0 md:mt-2 border-slate-200 md:p-2 flex justify-around'>
                        <p className='flex items-center md:gap-3'><FaLocationDot className='text-[#86b817]' /> Thailand</p>
                        <p className='flex items-center md:gap-3'><FaCalendar className='text-[#86b817]' /> 3 Days</p>
                        <p className='flex items-center md:gap-3'><FaPerson className='text-[#86b817]' /> 2 Person</p>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">$149.00</h2>
                        <p className='flex text-[#86b817]'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam
                            ipsum sit diam amet diam eos</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/myV3vY4/package-2.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className='border border-t-0 border-l-0 border-r-0 md:mt-2 border-slate-200 md:p-2 flex justify-around'>
                        <p className='flex items-center md:gap-3'><FaLocationDot className='text-[#86b817]' /> Indonesia</p>
                        <p className='flex items-center md:gap-3'><FaCalendar className='text-[#86b817]' /> 3 Days</p>
                        <p className='flex items-center md:gap-3'><FaPerson className='text-[#86b817]' /> 2 Person</p>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">$139.00</h2>
                        <p className='flex text-[#86b817]'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam
                            ipsum sit diam amet diam eos</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/X7xrvMw/package-3.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className='border border-t-0 border-l-0 border-r-0 md:mt-2 border-slate-200 md:p-2 flex justify-around'>
                        <p className='flex items-center md:gap-3'><FaLocationDot className='text-[#86b817]' /> Malaysia</p>
                        <p className='flex items-center md:gap-3'><FaCalendar className='text-[#86b817]' /> 3 Days</p>
                        <p className='flex items-center md:gap-3'><FaPerson className='text-[#86b817]' /> 2 Person</p>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">$189.00</h2>
                        <p className='flex text-[#86b817]'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam
                            ipsum sit diam amet diam eos</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;