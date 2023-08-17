import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaPlane } from "react-icons/fa";

const Process = () => {
  return (
    <div className="md:mb-16 md:mx-16">
      <div className="text-center space-y-3 md:mb-10">
        <p className="text-[#86b817] text-lg">Process</p>
        <h3 className="text-3xl font-semibold">3 Easy Steps</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
        <div className="card w-96 bg-base-100 shadow-xl border">
          <div className="">
            <figure className="px-10 pt-10">
              <p className="md:p-3 rounded-full md:text-7xl text-white  bg-[#86b817]">
                <AiOutlineGlobal />
              </p>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Choose A Destination</h2>
              <p>
                Tempor erat elitr rebum clita dolor diam ipsum sit diam amet
                diam eos erat ipsum et lorem et sit sed stet lorem sit
              </p>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl border">
          <div className="">
            <figure className="px-10 pt-10">
              <p className="md:py-3 md:px-7 rounded-full md:text-7xl text-white  bg-[#86b817]">
                $
              </p>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Pay Online</h2>
              <p>
                Tempor erat elitr rebum clita dolor diam ipsum sit diam amet
                diam eos erat ipsum et lorem et sit sed stet lorem sit
              </p>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl border">
          <div className="">
            <figure className="px-10 pt-10">
              <p className="md:p-3 rounded-full md:text-7xl text-white  bg-[#86b817]">
                <FaPlane/>
              </p>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Fly Today</h2>
              <p>
                Tempor erat elitr rebum clita dolor diam ipsum sit diam amet
                diam eos erat ipsum et lorem et sit sed stet lorem sit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
