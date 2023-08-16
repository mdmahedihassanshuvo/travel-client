import React from 'react';

const Destination = () => {
    return (
        <div className='md:mx-16 md:mb-16'>
            <div className='text-center space-y-3 md:mb-16'>
                <p className='text-[#86b817] text-lg'>Destination</p>
                <h2 className='text-3xl font-semibold'>Popular Destination</h2>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 relative'>
                <div>
                    <img className='md:h-[310px]' src='https://i.ibb.co/tPNFtgx/destination-1.jpg' alt="" />
                    <p className='text-red-500 bg-white absolute top-3 left-3 p-2 rounded-md font-semibold'>30% OFF</p>
                </div>
                <div className='md:relative row-span-2'>
                    <img className='md:w-full md:h-[600px]' src='https://i.ibb.co/zsxRqtz/destination-4.jpg' alt="" />
                    <p className='text-red-500 bg-white absolute top-3 left-3 p-2 rounded-md font-semibold'>20% OFF</p>
                </div>
                <div className='md:flex md:gap-5'>
                    <div className='md:relative'>
                        <img className='md:h-[270px]' src='https://i.ibb.co/BCpVBQd/destination-2.jpg' alt="" />
                        <p className='text-red-500 bg-white absolute top-3 left-3 p-2 rounded-md font-semibold'>25% OFF</p>
                    </div>
                    <div className='md:relative'>
                        <img className='md:h-[270px]' src='https://i.ibb.co/cQmnkWS/destination-3.jpg' alt="" />
                        <p className='text-red-500 bg-white absolute top-3 left-3 p-2 rounded-md font-semibold'>35% OFF</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;