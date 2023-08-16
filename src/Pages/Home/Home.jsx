import React from 'react';
import Hero from '../../Components/HomeSections/Hero';
import Welcome from '../../Components/HomeSections/welcome';
import Services from '../../Components/HomeSections/Services';
import Destination from '../Destination/Destination';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Welcome/>
            <Services/>
            <Destination/>
        </div>
    );
};

export default Home;