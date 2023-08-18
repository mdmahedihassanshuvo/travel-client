import React from "react";
import { FaFacebook, FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { SiYoutube } from "react-icons/si";
import { Link } from "react-router-dom";

const SubHeading = () => {
  return (
    <div>
      <div className="hidden md:flex relative px-6 py-3 justify-between items-center bg-[#14141F] text-[#F5F5F5]">
        <div className="flex ">
          <p className="flex items-center mr-3">
            <FaLocationDot /> Brooklyn, NY 10036, United States
          </p>
          <p className="flex items-center mr-3">
            <FaPhoneAlt /> +000 123 456789
          </p>
          <p className="flex items-center mr-3">
            <AiFillMail /> mhshuvo6795@gmail.com
          </p>
        </div>
        <div className="flex">
          <Link
            to="https://www.facebook.com/shuvo6795/"
            className="flex text-2xl items-center mr-4 border border-white rounded-full"
          >
            <FaFacebook />
          </Link>
          <Link
            to="https://www.linkedin.com/in/md-mahedi-hassan-shuvo-8b86a725a/"
            className="flex text-2xl items-center mr-4 border border-white rounded-full"
          >
            <TiSocialLinkedin />
          </Link>
          <Link
            to="https://www.youtube.com/"
            className="flex text-2xl items-center mr-4 border border-white rounded-full"
          >
            <SiYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubHeading;
