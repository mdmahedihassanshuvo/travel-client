import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen md:mb-16" style={{ backgroundImage: 'url(https://i.ibb.co/Z6r8hwy/bg-hero.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Enjoy Your Vacation With Us</h1>
                    <p>Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                    <input type="text" placeholder='Enter Bangladesh Travel Place' className='mt-2 md:w-96 p-2 rounded-3xl text-center border-2 border-[#86b817]' />
                </div>
            </div>
        </div>
    );
};

export default Hero;