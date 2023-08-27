import React from "react";
import img4 from "../../assets/img/icon2/img4.png";

const Service = () => {
  return (
    <div className="md:my-16 md:mx-16">
      <div className="bg-none">
        <div className="text-center space-y-3 md:mb-10">
          <h3 className="text-3xl font-semibold">Why Chooce Us </h3>
        </div>
        <div className="flex justify-between md:gap-8">
          <div className="md:w-3/5 grid grid-cols-2 md:gap-4">
            <div className="rounded-2xl py-0 px-3 space-y-2 shadow-2xl">
              <img
                src="https://i.ibb.co/g4SyBXC/planning-9402387-1.png"
                alt=""
              />
              <h4 className='font-semibold text-xl'>Reservation Manegment</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the
              </p>
            </div>
            <div className="rounded-2xl py-0 px-3 space-y-2 shadow-2xl">
              <img src={img4} alt="" />
              <h4 className='font-semibold text-xl'>Payment Flexiblity</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the
              </p>
            </div>
            <div className="rounded-2xl py-0 px-3 space-y-2 shadow-2xl">
              <img src="https://i.ibb.co/vYxyB8s/globe-6556412-1.png" alt="" />
              <h4 className='font-semibold text-xl'>Customize Tour Pack</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the
              </p>
            </div>
            <div className="rounded-2xl py-0 px-3 space-y-2 shadow-2xl">
              <img src="https://i.ibb.co/vYxyB8s/globe-6556412-1.png" alt="" />
              <h4 className='font-semibold text-xl'>World Wide Tour Operators</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the
              </p>
            </div>
          </div>
          <div className="md:w-2/5 bg-none">
            <img className="md-w-full" src="https://i.ibb.co/zrLwSK4/service.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
