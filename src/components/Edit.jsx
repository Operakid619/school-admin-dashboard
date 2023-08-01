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

function Edit() {
  return (
    <div className="mt-[80px] bg-slate-100 h-screen overflow-x-hidden">
      <div className=" flex px-7 justify-between items-center pt-7 lg:text-xl font-semibold">
        <div>Edit Student</div>
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
            placeholder="First Name"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Last Name"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" Email"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
          <input
            type="text"
            name="phone"
            id="number"
            placeholder="Phone Number"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
          />
        </div>
        <div className="first space-y-7 flex flex-col items-center flex-1">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Last Name"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" Email"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Phone Number"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
          />
        </div>
        <div className="first space-y-7 flex flex-col items-center flex-1">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Last Name"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Last Name"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Last Name"
            className="w-[370px] h-[40px] rounded-md outline-none px-5"
            required
          />
        </div>
        <div className=" flex flex-col items-center space-y-4  ">
          <div className="font-semibold lg:text-xl">
            Upload a picture (150 x 150 )
          </div>
          <button className="hover:bg-blue- delay-150 duration-150 bg-blue-500 px-2 ">
            Choose File
          </button>
          <button className=" bg-slate-900 text-white px-5 py-2 rounded-md hover:bg-slate-700 delay-150 duration-150">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
