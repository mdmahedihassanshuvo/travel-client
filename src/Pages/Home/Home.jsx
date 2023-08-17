import React from 'react';
import Hero from '../../Components/HomeSections/Hero';
import Welcome from '../../Components/HomeSections/welcome';
import Services from '../../Components/HomeSections/Services';
import Destination from '../Destination/Destination';
import Package from '../../Components/HomeSections/Package';
import Booking from '../../Components/HomeSections/Booking';
import Process from '../../Components/HomeSections/Process';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Welcome/>
            <Services/>
            <Destination/>
            <Package/>
            <Booking/>
            <Process/>
        </div>
    );
};

export default Home;