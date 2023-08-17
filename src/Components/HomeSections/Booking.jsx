import React from "react";

const Booking = () => {
  return (
    <div
      className="hero min-h-screen md:mb-16"
      style={{
        backgroundImage: "url(https://i.ibb.co/PDB2CQ6/booking.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
          <div className="text-left text-white">
            <p className="font-semibold md:mb-4">Booking</p>
            <h2 className="text-3xl font-semibold md:mb-4">Online Booking</h2>
            <p className="text-justify md:mb-3 text-sm">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
            <p className="text-justify md:mb-5 text-sm">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <button className="btn btn-ghost border border-white">Read More</button>
          </div>
          <div>
            <h2 className="text-3xl font-semibold md:mb-5 text-white">Book A Tour</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
              <input className="p-2 bg-transparent border border-white" type="text" name="name" placeholder="Your Name" />
              <input className="p-2 bg-transparent border border-white" type="email" name="email" placeholder="Your Email" />
              <input className="p-2 bg-transparent border border-white" type="date" name="date" id="" placeholder="Date" />
              <input className="p-2 bg-transparent border border-white" type="text" name="destination" placeholder="Destination" />
              <button className="p-2 hover:bg-slate-800 hover:text-white bg-transparent border border-white col-span-2">Book Now</button>
            </form> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
