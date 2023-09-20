import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaStar } from "react-icons/fa6";
import Rating from "react-rating";

const Package = () => {
  const { data: packAges = [] } = useQuery({
    queryKey: ["packAges"],
    queryFn: async () => {
      const res = await axios("http://localhost:5000/packages");
      return res.data;
    },
  });
  console.log(packAges);
  // const {description, price, image, packages, ratings, title, _id} = packAges;

  return (
    <div className="md:m-16">
      <Helmet title="Tourist - Package" />
      <div className="text-center space-y-3 md:mb-10">
        <h3 className="text-3xl font-semibold">Holiday Packeg</h3>
      </div>
      <div className="flex justify-center items-center md:gap-10">
        {packAges.map((item) => (
          <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body md:space-y-3 md:mx-2">
              <h2 className="md:text-2xl font-semibold text-[#86b817]">
                {item.title}
              </h2>
              <p className="text-justify">{item.description}</p>
              <div className="flex justify-between items-center">
                <p className="font-bold text-base text-start">
                  {item.packages}
                </p>
                <p className="font-bold text-base text-end">${item.price}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>
                  <Rating
                    placeholderRating={item.ratings}
                    emptySymbol={<FaStar className="text-[#ea971a]" />}
                    placeholderSymbol={<FaStar className="text-[#ea971a]" />}
                    fullSymbol={<FaStar className="text-[#ea971a]" />}
                  />
                </p>
                <button className="btn bg-[#86b817] hover:bg-[#ea971a] text-white">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package;
