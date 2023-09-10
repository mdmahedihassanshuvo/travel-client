import React from 'react';
import Hero from '../../Components/HomeSections/Hero';
import Welcome from '../../Components/HomeSections/welcome';
import Services from '../../Components/HomeSections/Services';
import Destination from '../Destination/Destination';
import Package from '../../Components/HomeSections/Package';
import Booking from '../../Components/HomeSections/Booking';
import Process from '../../Components/HomeSections/Process';
import Guide from '../../Components/HomeSections/Guide';
import Testimonial from '../../Components/HomeSections/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet title='Tourist - Home'/>
            <Hero/>
            <Welcome/>
            <Services/>
            <Destination/>
            <Package/>
            <Booking/>
            <Process/>
            <Guide/>
            <Testimonial/>
        </div>
    );
};

export default Home;