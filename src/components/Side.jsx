import React from "react";
import classNames from "classnames";
import { BsTable, BsPencilSquare } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaArrowRight,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaFileInvoiceDollar,
  FaMoneyCheck,
} from "react-icons/fa";

import { FcSettings } from "react-icons/fc";
function Side(showSidebar, setShowSidebar) {
  return (
    <div className="bg-white shadow w-[50%] fixed top-[80px] overflow-x-hidden h-full ">
      <div className="start space-y-7  overflow-x-hidden ">
        <h1 className="text-center mt-3 text-slate-400 font-serif underline-offset-4 underline font-semibold">
          Menu
        </h1>
        <div className="other mx-3 mt-5 space-y-4 ">
          <div className="flex justify-between items-center px-4  text-slate-600 ">
            <CgMenuGridR size={23} className="" />
            <h1>Dashboard</h1>
          </div>
          <div className="flex justify-between items-center px-4  text-slate-600">
            <FaUserGraduate size={23} className="" />
            <h1>Student</h1>
          </div>
          <div className="flex justify-between items-center px-4  text-slate-600">
            <FaChalkboardTeacher size={23} className="" />
            <h1>Teacher</h1>
          </div>
          <div className="flex justify-between items-center px-4  text-slate-600">
            <FaBookOpen size={23} className="" />
            <h1>Department</h1>
          </div>
          <div className="flex justify-between items-center px-4  text-slate-600">
            <FaFileInvoiceDollar size={23} className="" />
            <h1>Invoice</h1>
          </div>
        </div>
        <div className="second buttom space-y-5 mx-4">
          <h1 className="text-center text-slate-400 font-serif underline-offset-4 underline">
            Management
          </h1>
          <div className=" links start space-y-5 ">
            <div className="flex justify-between items-center px-4  text-slate-600">
              <FcSettings size={23} className="" />
              <h1>Settings</h1>
            </div>
            <div className="flex justify-between items-center px-4  text-slate-600">
              <FaMoneyCheck size={23} className="" />
              <h1> Payment</h1>
            </div>
            <div className="flex justify-between items-center px-4  text-slate-600">
              <BsTable size={23} className="" />
              <h1>Term Plan</h1>
            </div>
            <div className="flex justify-between items-center px-4  text-slate-600">
              <BsPencilSquare size={23} className="" />
              <h1>Result</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Side;
