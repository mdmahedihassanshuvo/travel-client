import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion"

const Dashboard = () => {
  return (
    <div>
      <Helmet title='Tourist - Dashboard'/>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        {/* flex flex-col items-center justify-center */}
        <div className="drawer-content ">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content md:bg-slate-200">
            {/* Sidebar content here */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#86b817] hover:border-b-2 border-[#86b817] transition-transform"
                    : "hover:border-b-2 border-[#86b817] transition-transform "
                }
              >
                <span className="text-lg hover:text-green-500 font-medium">
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#86b817] hover:border-b-2 border-[#86b817] transition-transform"
                    : "hover:border-b-2 border-[#86b817] transition-transform "
                }
              >
                <span className="text-lg hover:text-green-500 font-medium">
                  Profile
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/selectedplan"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#86b817] hover:border-b-2 border-[#86b817] transition-transform "
                    : "hover:border-b-2 border-[#86b817] transition-transform"
                }
              >
                <span className="text-lg hover:text-green-500 font-medium">
                  Selected Tour Plan
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/tour"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#86b817] hover:border-b-2 border-[#86b817] transition-transform "
                    : "hover:border-b-2 border-[#86b817] transition-transform"
                }
              >
                <span className="text-lg hover:text-green-500 font-medium">
                  Paid Tour Plan
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
