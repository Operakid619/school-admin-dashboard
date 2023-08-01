import React from "react";

import Image from "next/image";
import { BiDotsHorizontal } from "react-icons/bi";
import Circle from "@/components/Circle";

import DatePickerMaterialUI from "@/components/BasicDateCalender";

import Next from "@/components/Next";

function page() {
  return (
    <div className="mt-[80px] bg-slate-100 h-screen overflow-x-hidden">
      <div className="flex justify-between px-4 items-center pt-7">
        <h1 className="pl-3 lg:pl-4 lg:text-2xl lg:font-medium font-semibold  ">
          Welcome Josh
        </h1>
        <h1 className="hidden lg:flex">links </h1>
      </div>
      <div className="begin mt-3  mx-4 space-y-5 lg:grid lg:grid-cols-2 lg:gap-6 items-center">
        <div className="bg-white shadow-md flex justify-between items-center rounded-md py-5 px-3 lg:px-6 lg:py-9 ">
          <div className="space-y-2">
            <h1 className="font-bold lg:text-2xl ">All Courses</h1>
            <h1 className="font-bold lg:text-2xl ">04/10</h1>
          </div>
          <div className="bg-blue-200 shadow-md rounded-md">
            <Image
              src="/studentss.png"
              alt="classes"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="bg-white shadow-md flex justify-between items-center rounded-md py-5 px-3 lg:px-6 lg:py-9 ">
          <div className="space-y-2">
            <h1 className="font-bold lg:text-2xl ">Projects</h1>
            <h1 className="font-bold lg:text-2xl ">40/60</h1>
          </div>
          <div className=" shadow-md rounded-md">
            <Image src="/bok.png" alt="classes" width={100} height={100} />
          </div>
        </div>
        <div className="bg-white shadow-md flex justify-between items-center rounded-md py-5 px-3 lg:px-6 lg:py-9 ">
          <div className="space-y-2">
            <h1 className="font-bold lg:text-2xl ">Attendance</h1>
            <h1 className="font-bold lg:text-2xl ">40/60</h1>
          </div>
          <div className=" shadow-md rounded-md">
            <Image src="/attend.png" alt="classes" width={100} height={100} />
          </div>
        </div>
        <div className="bg-white shadow-md flex justify-between items-center rounded-md py-5 px-3 lg:px-6 lg:py-9 ">
          <div className="space-y-2 ">
            <h1 className="font-bold lg:text-2xl ">Result /GP</h1>
            <h1 className="font-bold lg:text-2xl ">2.95 </h1>
          </div>
          <div className=" shadow-md rounded-md">
            <Image src="/gp.png" alt="classes" width={100} height={100} />
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white shadow-md mx-4">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="font-semibold lg:text-2xl ">Today's Classes</div>
          <div className="sfont-semibold lg:text-2xl flex space-x-2 items-center hover:text-blue-600 duration-150 delay-150 cursor-pointer">
            <h1>Veiw All</h1>
            <div>
              <BiDotsHorizontal size={30} />
            </div>
          </div>
        </div>
        <div className="the start flex flex-col items-center  space-y-5 mt-5 px-4 lg:grid lg:grid-cols-3 pb-4">
          <Circle />

          <div className="space-y-4 flex-col items-center">
            <h1 className="lg:font-serif font-semibold text-slate-400 lg:text-3xl text-center lg:text-left ">
              Class
            </h1>
            <h1 className="font-semibold">Mathematics</h1>
            <h1 className="font-semibold text-center lg:text-left">7 :00 Am</h1>
            <h1 className="font-semibold text-center lg:text-left">
              Mr George
            </h1>
          </div>
          <div className="space-y-4 flex-col items-center">
            <h1 className="lg:font-serif font-semibold text-slate-400 lg:text-3xl text-center lg:text-left ">
              Assignment
            </h1>
            <h1 className="font-semibold">2 Assignment</h1>
            <h1 className="font-semibold text-center lg:text-left">Test: 2</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
