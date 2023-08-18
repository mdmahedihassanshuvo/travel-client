import React from "react";
// import people1 from '../../../assets/images/people1.png'
// import people2 from '../../../assets/images/people2.png'
// import people3 from '../../../assets/images/people3.png'

const Testimonial = () => {
  return (
    <div className='md:mb-16 md:mx-16'>
      <div className='text-center space-y-3 md:mb-10'>
                <p className='text-[#86b817] text-lg'>Testimonial</p>
                <h3 className='text-3xl font-semibold'>What Our Patients Says</h3>
            </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-5 rounded-lg shadow-xl">
          <div className="space-y-2">
            <p className="text-start mb-2">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
          </div>
          <div className="flex justify-start items-center gap-5 mx-auto mb-3">
            <img
              className="border-2 border-cyan-400 rounded-full"
              src="https://i.ibb.co/v4w0qsJ/people1.png"
              alt=""
            />
            <div>
              <p className="font-semibold">Winson Herry</p>
              <p>California</p>
            </div>
          </div>
        </div>
        <div className="p-5 rounded-lg shadow-xl">
          <div className="space-y-2">
            <p className="text-start mb-2">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
          </div>
          <div className="flex justify-start items-center gap-5 mx-auto mb-3">
            <img
              className="border-2 border-cyan-400 rounded-full"
              src="https://i.ibb.co/SVF3dyh/people2.png"
              alt=""
            />
            <div>
              <p className="font-semibold">Winson Herry</p>
              <p>California</p>
            </div>
          </div>
        </div>
        <div className="p-5 rounded-lg shadow-xl">
          <div className="space-y-2">
            <p className="text-start mb-2">
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
          </div>
          <div className="flex justify-start items-center gap-5 mx-auto mb-3">
            <img
              className="border-2 border-cyan-400 rounded-full"
              src="https://i.ibb.co/HHXPD1Q/people3.png"
              alt=""
            />
            <div>
              <p className="font-semibold">Winson Herry</p>
              <p>California</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
