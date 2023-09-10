import React from "react";
import time from "../../assets/img/clock.svg";
import marker from "../../assets/img/marker.svg";
import phone from "../../assets/img/phone.svg";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="md:mb-16 md:mx-16 md:mt-10">
      <Helmet title='Tourist - Contact Us'/>
      <div className="text-center space-y-3 md:mb-10">
        <p className="text-[#86b817] text-lg">Services</p>
        <h3 className="text-3xl font-semibold">Our Services</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-2 lg:mx-5 mb-4 lg:mb-32">
        <div className="p-5 text-white rounded-lg bg-[#86b817]">
          <img className="mx-auto mb-3" src={time} alt="" />
          <div>
            <p className="text-center">Opening Hours</p>
            <p className="text-center">
              Lorem Ipsum is simply dummy text of the pri
            </p>
          </div>
        </div>
        <div className="p-5 text-white rounded-lg bg-[#3A4256]">
          <img className="mx-auto mb-3" src={marker} alt="" />
          <div>
            <p className="text-center">Visit our location</p>
            <p className="text-center">Brooklyn, NY 10036, United States</p>
          </div>
        </div>
        <div className="p-5 text-white rounded-lg bg-[#86b817]">
          <img className="mx-auto mb-3" src={phone} alt="" />
          <div>
            <p className="text-center">Contact us now</p>
            <p className="text-center">+000 123 456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
