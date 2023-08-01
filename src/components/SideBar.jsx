import React from "react";
import classNames from "classnames";
import { BsTable, BsPencilSquare } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { motion } from "framer-motion";
import Link from "next/link";
import { SlNote } from "react-icons/sl";
import {
  FaBookOpen,
  FaArrowRight,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaFileInvoiceDollar,
  FaMoneyCheck,
} from "react-icons/fa";

import { FcSettings } from "react-icons/fc";
function SideBar(showSidebar, setShowSidebar) {
  return (
    <div className="bg-white shadow w-[30%] fixed top-[80px] overflow-x-hidden h-full z-40 ">
      <div className="start space-y-7  overflow-x-hidden ">
        <h1 className="text-center mt-3 text-slate-400 font-serif underline-offset-4 underline font-semibold">
          Menu
        </h1>
        <motion.div className="other mx-3 mt-5 space-y-4 px-7">
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="flex justify-between items-center px-4 text-slate-600">
              <div whileHover={{ scale: 1.2 }}>
                <FaUserGraduate size={23} className="" />
              </div>
              <motion.div
                className="hover:text-blue-600 duration-150 delay-150"
                whileHover={{ scale: 1.2 }}
              >
                Add Student
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }}
          >
            <div className="flex justify-between items-center px-4 text-slate-600">
              <div whileHover={{ scale: 1.2 }}>
                <AiOutlineSchedule size={23} className="" />
              </div>
              <motion.div
                className="hover:text-blue-600 duration-150 delay-150"
                whileHover={{ scale: 1.2 }}
              >
                Time Table
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
          >
            <div className="flex justify-between items-center px-4 text-slate-600">
              <div whileHover={{ scale: 1.2 }}>
                <SlNote size={23} className="" />
              </div>
              <motion.div
                className="hover:text-blue-600 duration-150 delay-150"
                whileHover={{ scale: 1.2 }}
              >
                Results
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3,
            }}
          >
            <div className="flex justify-between items-center px-4 text-slate-600">
              <div whileHover={{ scale: 1.2 }}>
                <CgMenuGridR size={23} className="" />
              </div>
              <motion.div
                className="hover:text-blue-600 duration-150 delay-150"
                whileHover={{ scale: 1.2 }}
              >
                Dashboard
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.4,
            }}
          >
            <div className="flex justify-between items-center px-4 text-slate-600">
              <div whileHover={{ scale: 1.2 }}>
                <CgMenuGridR size={23} className="" />
              </div>
              <motion.div
                className="hover:text-blue-600 duration-150 delay-150"
                whileHover={{ scale: 1.2 }}
              >
                Dashboard
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <div className="second buttom space-y-5 mx-4 px-7">
          <h1 className="text-center text-slate-400 font-serif underline-offset-4 underline">
            Management
          </h1>
          <div className=" links start space-y-5 ">
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5,
              }}
            >
              <div className="flex justify-between items-center px-4 text-slate-600">
                <div whileHover={{ scale: 1.2 }}>
                  <FaMoneyCheck size={23} className="" />
                </div>
                <motion.div
                  className="hover:text-blue-600 duration-150 delay-150"
                  whileHover={{ scale: 1.2 }}
                >
                  Fees
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.6,
              }}
            >
              <div className="flex justify-between items-center px-4 text-slate-600">
                <div whileHover={{ scale: 1.2 }}>
                  <AiOutlineSchedule size={23} className="" />
                </div>
                <motion.div
                  className="hover:text-blue-600 duration-150 delay-150"
                  whileHover={{ scale: 1.2 }}
                >
                  Time Table
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.7,
              }}
            >
              <div className="flex justify-between items-center px-4 text-slate-600">
                <div whileHover={{ scale: 1.2 }}>
                  <CgMenuGridR size={23} className="" />
                </div>
                <motion.div
                  className="hover:text-blue-600 duration-150 delay-150"
                  whileHover={{ scale: 1.2 }}
                >
                  Dashboard
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.8,
              }}
            >
              <div className="flex justify-between items-center px-4 text-slate-600">
                <div whileHover={{ scale: 1.2 }}>
                  <CgMenuGridR size={23} className="" />
                </div>
                <Link href="/Edit">
                  <motion.div
                    className="hover:text-blue-600 duration-150 delay-150"
                    whileHover={{ scale: 1.2 }}
                  >
                    Dashboard
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
