"use client";

import React from "react";
import { motion } from "framer-motion";

const date = new Date();
const hour = date.getHours();
let greeting;

if (hour < 12) {
  greeting = "Good Morning";
} else if (hour < 18) {
  greeting = "Good Afternoon";
} else if (hour < 21) {
  greeting = "Good Evening";
} else {
  greeting = "Good Night";
}

function Examedit() {
  return (
    <div className="mt-[80px] bg-slate-100 h-screen overflow-x-hidden">
      <div className=" flex px-7 justify-between items-center pt-7 lg:text-xl font-semibold">
        <div>Edit Exam</div>
        <div className="flex space-x-3">
          <div>{greeting}</div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Admin
          </motion.div>
        </div>
      </div>
      <div className="every flex flex-col items-center pt-6 space-y-7 mt-10 lg:grid lg:grid-cols-3 lg:items-center lg:place-items-center overflow-x-hidden pb-7">
        <div className="first space-y-7 flex flex-col items-center px-3">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Exam Name"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Subject Name"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />

          <input
            type="text"
            name="phone"
            id="text"
            placeholder="Start Date"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
          />
        </div>
        <div className="first space-y-7 flex flex-col items-center flex-1">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Start Time"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Class Name"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="End Date"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
        </div>
        <div className="first space-y-7 flex flex-col items-center flex-1">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="End Time"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="End Time"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
        </div>
        <div className=" flex flex-col items-center space-y-4  ">
          <button className=" bg-slate-900 text-white px-5 py-2 rounded-md hover:bg-slate-700 delay-150 duration-150">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Examedit;
