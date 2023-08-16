import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import SubHeading from '../../Shared/SubHeading/SubHeading';

const Main = () => {
    return (
        <>
            <SubHeading/>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;