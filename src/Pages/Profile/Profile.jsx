import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    // flex flex-col justify-center items-center
    <div className="md:my-16 md:mx-16">
      <div className="flex flex-col justify-center items-start">
        <div>
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} title={user?.displayName} />
          </div>
        </div>
        <h2 className="text-xl font-semibold mt-3">{user?.displayName}</h2>
        <h2 className="text-lg">Email Address: <span className="text-blue-500 underline">{user?.email}</span></h2>
        </div>
        <div className="">
          <p className="text-lg">Selected Plan: </p>
          <p className="text-lg">Total Buy Plan: </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
