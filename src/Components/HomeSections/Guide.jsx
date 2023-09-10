import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Guide = () => {
  return (
    <div className="md:mb-16 md:mx-16">
      <div className="text-center space-y-3 md:mb-10">
        <p className="text-[#86b817] text-lg">Travel Guide</p>
        <h3 className="text-3xl font-semibold">Meet Our Guide</h3>
      </div>
      <div className="text-center grid grid-cols-1 md:grid-cols-4 md:gap-5">
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/TrcB9QK/team-1.jpg" alt="Shoes" />
          </figure>
          <div className="flex gap-4 justify-center relative -top-5">
            <div className="p-2 bg-slate-200 inline-block rounded-full">
              <FaFacebook className="text-[#87b919] text-xl" />
            </div>
            <div className="p-2 bg-slate-200 inline-block rounded-full">
              <FaTwitter className="text-[#87b919] text-xl" />
            </div>
            <div className="p-2 bg-slate-200 inline-block rounded-full">
              <FaInstagram className="text-[#87b919] text-xl" />
            </div>
          </div>
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center">Michael</h2>
            <p>Thailand</p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/cLS7SZg/team-2.jpg" alt="Shoes" />
          </figure>
          <div className="flex gap-4 justify-center relative -top-5">
            <div className="p-2 bg-slate-200 inline-block rounded-full">
              <FaFacebook className="text-[#87b919] text-xl" />
            </div>
            <div className="p-2 bg-slate-200 inline-block rounded-full">
              <FaTwitter className="text-[#87b919] text-xl" />
            </div>
            <div className="p-2 bg-slate-200 inline-block rounded-full">
              <FaInstagram className="text-[#87b919] text-xl" />
            </div>
          </div>
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center">Emily</h2>
            <p>Indonesia</p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/wpnXHJv/team-3.jpg" alt="Shoes" />
          </figure>
          <div className="flex gap-4 justify-center relative -top-5">
            <div className="p-2 bg-slate-200 inline-block rounded-full">
              <FaFacebook className="text-[#87b919] text-xl" />
            </div>
            <div className="p-2 bg-slate-200 inline-block rounded-full">
              <FaTwitter className="text-[#87b919] text-xl" />
            </div>
            <div className="p-2 bg-slate-200 inline-block rounded-full">
              <FaInstagram className="text-[#87b919] text-xl" />
            </div>
          </div>
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center">Christopher</h2>
            <p>Malaysia</p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/wr093rp/team-4.jpg" alt="Shoes" />
          </figure>
          <div className="flex gap-4 justify-center relative -top-5">
            <div className="p-2 bg-slate-200 inline-block rounded-full">
              <FaFacebook className="text-[#87b919] text-xl" />
            </div>
            <div className="p-2 bg-slate-200 inline-block rounded-full">
              <FaTwitter className="text-[#87b919] text-xl" />
            </div>
            <div className="p-2 bg-slate-200 inline-block rounded-full">
              <FaInstagram className="text-[#87b919] text-xl" />
            </div>
          </div>
          <div className="card-body">
            <h2 className="text-xl font-semibold text-center">Sophia</h2>
            <p>Malaysia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
