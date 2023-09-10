import React from "react";
import { Helmet } from "react-helmet-async";
import { FaStar } from "react-icons/fa6";
import Rating from "react-rating";

const Package = () => {
  return (
    <div className="md:m-16">
      <Helmet title='Tourist - Package'/>
      <div className="text-center space-y-3 md:mb-10">
        <h3 className="text-3xl font-semibold">Holiday Packeg</h3>
      </div>
      <div className="flex justify-center items-center md:gap-10">
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/DrNT1cB/package-1.png" alt="Shoes" />
          </figure>
          <div className="card-body md:space-y-3 md:mx-2">
            <h2 className="md:text-2xl font-semibold text-[#86b817]">
              Marriage and greenland
            </h2>
            <p className="text-justify">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the
            </p>
            <div className="flex justify-between items-center">
              <p className="font-bold text-base text-start">4 Day 4 Night</p>
              <p className="font-bold text-base text-end">$1500</p>
            </div>
            <div className="flex justify-between items-center">
              <p>
                <Rating
                  placeholderRating={5}
                  emptySymbol={
                    <FaStar className="text-[#ea971a]"/>
                  }
                  placeholderSymbol={
                    <FaStar className="text-[#ea971a]"/>
                  }
                  fullSymbol={
                    <FaStar className="text-[#ea971a]"/>
                  }
                />
              </p>
              <button className="btn bg-[#86b817] hover:bg-[#ea971a] text-white">Book Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/QY0RMQK/package-2.png" alt="Shoes" />
          </figure>
          <div className="card-body md:space-y-3 md:mx-2">
            <h2 className="md:text-2xl font-semibold text-[#86b817]">
              Marriage and greenland
            </h2>
            <p className="text-justify">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the
            </p>
            <div className="flex justify-between items-center">
              <p className="font-bold text-base text-start">4 Day 4 Night</p>
              <p className="font-bold text-base text-end">$1500</p>
            </div>
            <div className="flex justify-between items-center">
              <p>
                <Rating
                  placeholderRating={5}
                  emptySymbol={
                    <FaStar className="text-[#ea971a]"/>
                  }
                  placeholderSymbol={
                    <FaStar className="text-[#ea971a]"/>
                  }
                  fullSymbol={
                    <FaStar className="text-[#ea971a]"/>
                  }
                />
              </p>
              <button className="btn bg-[#86b817] hover:bg-[#ea971a] text-white">Book Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/m9dq0Pc/package-3.png" alt="Shoes" />
          </figure>
          <div className="card-body md:space-y-3 md:mx-2">
            <h2 className="md:text-2xl font-semibold text-[#86b817]">
              Marriage and greenland
            </h2>
            <p className="text-justify">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the
            </p>
            <div className="flex justify-between items-center">
              <p className="font-bold text-base text-start">4 Day 4 Night</p>
              <p className="font-bold text-base text-end">$1500</p>
            </div>
            <div className="flex justify-between items-center">
              <p>
                <Rating
                  placeholderRating={5}
                  emptySymbol={
                    <FaStar className="text-[#ea971a]"/>
                  }
                  placeholderSymbol={
                    <FaStar className="text-[#ea971a]"/>
                  }
                  fullSymbol={
                    <FaStar className="text-[#ea971a]"/>
                  }
                />
              </p>
              <button className="btn bg-[#86b817] hover:bg-[#ea971a] text-white">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
