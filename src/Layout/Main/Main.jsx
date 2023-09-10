import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import SubHeading from "../../Shared/SubHeading/SubHeading";

const Main = () => {
  return (
    <div className="bg-white">
      <SubHeading />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
