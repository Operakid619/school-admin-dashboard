import Image from "next/image";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import LinearDeterminate from "./Progress";
import LinearWithValueLabel from "./Progress";
function Competion() {
  return (
    <div className="mt-5  mx-4 shadow-md bg-white lg:mx-9 rounded-md pb-4">
      <div className=" mt-6 pt-5">
        <div className=" flex justify-between items-center px-5">
          <h1 className="font-semibold text-lg ">School Activity</h1>

          <BiDotsVerticalRounded size={23} />
        </div>
        <div className="start 1 flex justify-between items-center space-y-5 mt-[35px] px-5 ">
          <div className="left flex items-center space-x-9 ">
            <Image src="/jamb1.png" width={100} height={100} />
            <div>
              <h1>JAMB</h1>
            </div>
          </div>
          <div className=" bg-green-500 text-white px-3 rounded-md py-1 ">
            On Progress
          </div>
        </div>
        <div className="start 1 flex justify-between items-center space-y-5 mt-[35px] px-5">
          <div className="left flex items-center space-x-9 ">
            <Image src="/waec.png" width={100} height={150} />
            <div>
              <h1>WAEC</h1>
            </div>
          </div>
          <div className=" bg-red-500 text-white  rounded-md px-8 ">Ended</div>
        </div>
        <div className="start 1 flex justify-between items-center space-y-5 mt-[35px] px-5">
          <div className="left flex items-center space-x-[30px] ">
            <Image src="/exams.png" width={60} height={60} className="pl-2" />
            <div className="lg:pl-6">
              <h1>Jss3 Exams </h1>
            </div>
          </div>
          <div className=" bg-green-500 text-white px-3 rounded-md py-1 ">
            On Progress
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competion;
