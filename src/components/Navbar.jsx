"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import SideBar from "./SideBar";
import { AiOutlineClose, AiOutlineScan } from "react-icons/ai";
import Side from "./Side";
import { motion } from "framer-motion";

import { CgMenuGridR } from "react-icons/cg";

function Navbar() {
  const [show, setShow] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleSmall = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="shadow-sm fixed top-0 w-full h-[80px] overflow-hidden cursor-pointer bg-white overflow-x-hidden overflow-y- z-50 items-center">
      <div className="flex overflow-x-hidden  justify-between items-center px-5 py-7 ">
        <div className="left flex items-center space-x-9 lg:hidden ">
          <button onClick={handleSmall}>
            {showSidebar ? <AiOutlineClose /> : <FaAlignLeft />}
          </button>
          <div className="font-semibold">DASHBOARD</div>
        </div>
        <div className="hidden lg:flex">
          <Image src="/logo.png" alt="logo" width={120} height={100} />
        </div>

        <button onClick={handleShow}>
          <div>
            {show ? (
              <AiOutlineClose className="text-[30px] hidden lg:flex" />
            ) : (
              <CgMenuGridR className="text-3xl hidden lg:flex" />
            )}
          </div>
        </button>
        <form>
          <input
            placeholder="Search "
            type="text"
            className="bg-slate-100 h-[40px] w-[350px] rounded-md pl-5 outline-none hidden lg:block "
          />
        </form>

        <div className="right flex items-center space-x-5">
          <div className="bg-white hidden lg:flex">
            <Image src="/change.png" alt="logo" width={60} height={60} />
          </div>

          <div className="bg-slate-100 px-2 py-1 rounded-md hidden lg:flex items-center">
            <AiOutlineScan className=" text-3xl lg:flex" />
          </div>

          <div className="bg-slate-100 px-2 py-1 rounded-md">
            <div className="absolute text-white bg-red-600 rounded-full px-2 top-[15px]">
              2
            </div>
            <IoNotificationsOutline className=" text-3xl lg:flex" />
          </div>

          <Image
            src="/avater.png"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="hidden flex-col bg-gray-100 items-center  hover:bg-gray-200 px-6 lg:flex ">
            <h1 className="font-semibold">John Doe</h1>
            <p className="text-sm">Admin</p>
          </div>
        </div>
      </div>
      {showSidebar && <Side />}
      {show && <SideBar />}
    </div>
  );
}

export default Navbar;
