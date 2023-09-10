import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaLocationDot } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral flex justify-around text-neutral-content">
      <div className="">
        <p className="flex items-center gap-1 text-[#87b919] text-3xl">
          <FaLocationDot /> Tourist
        </p>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">FAQ's</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Contact Us</span>
        <a className="link link-hover">
          <p className="flex items-center mr-3">
            <FaLocationDot /> Brooklyn, NY 10036, United States
          </p>
        </a>
        <a className="link link-hover">
          <p className="flex items-center mr-3">
            <FaPhoneAlt /> +000 123 456789
          </p>
        </a>
      </div>
      <div>
        <span className="footer-title">Quick Link</span>
        <a className="link link-hover">Style Guide</a>
        <a className="link link-hover">Career</a>
        <a className="link link-hover">Help Text</a>
      </div>
      <div>
        <span className="footer-title">Social Share</span>
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
    </footer>
  );
};

export default Footer;
