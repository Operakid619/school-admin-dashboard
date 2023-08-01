import React from "react";
import Counter from "../components/counter";
import Image from "next/image";
import Link from "next/link";
import Charts from "@/components/Charts";
import Pie from "@/components/Pie";
import Table from "@/components/Table";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Competion from "@/components/Competion";
import Last from "@/components/Last";

function page() {
  return (
    <div className="mt-[80px] bg-[#F8F8FF] overflow-x-hidden ">
      <div className=" overflow-x-hidden ">
        <div className="flex justify-between px-4 items-center pt-7">
          <h1 className="pl-3 lg:pl-4 lg:text-2xl lg:font-medium  ">
            Welcome Admin
          </h1>
          <h1 className="hidden lg:flex">links </h1>
        </div>
        <div className=" begging of the divs space-y-5 lg:grid grid-cols-2 lg:h-[500px] mt-5  ">
          <div className=" first block-stuff bg-white shadow-sm flex mx-5 py-6 items-center justify-between rounded-lg px-10 ">
            <div className="flex flex-col space-y-2 text-sm  lg:space-y-8">
              <h1 className="font-semibold text-2xl text-blue-600">Students</h1>
              <Counter />
              <Link
                href="/Student"
                className="bg-blue-700 px-2 py-1 text-white rounded-sm font-semibold hover:bg-blue-300 delay-200 duration-200 lg:px-4 lg:py-2 lg:text-lg lg:rounded-md lg:hover:bg-blue-300 lg:delay-200 lg:duration-200"
              >
                Add Student
              </Link>
            </div>

            <div>
              <Image
                src="/pix.png"
                width={100}
                height={100}
                className="lg:h-[120px] lg:w-[120px]"
              />
            </div>
          </div>
          <div className=" first block-stuff bg-white shadow-sm flex mx-5 py-6 items-center justify-between rounded-lg px-10">
            <div className="flex flex-col space-y-2 text-sm  lg:space-y-8">
              <h1 className="font-semibold text-2xl text-blue-600">Classes</h1>
              <Counter />
              <Link
                href="/"
                className="bg-blue-700 px-2 py-1 text-white rounded-sm font-semibold hover:bg-blue-300 delay-200 duration-200 lg:px-4 lg:py-2 lg:text-lg lg:rounded-md lg:hover:bg-blue-300 lg:delay-200 lg:duration-200"
              >
                Create Department
              </Link>
            </div>
            <div>
              <Image
                src="/buid.png"
                width={100}
                height={100}
                className="lg:h-[180px] lg:w-[180px]"
              />
            </div>
          </div>
          <div className=" first block-stuff bg-white shadow-sm flex mx-5 py-6 items-center justify-between rounded-lg px-10">
            <div className="flex flex-col space-y-2 text-sm  lg:space-y-8">
              <h1 className="font-semibold text-2xl text-blue-600">Revenue</h1>
              <Counter />
              <Link
                href="/"
                className="bg-blue-700 px-2 py-1 text-white rounded-sm font-semibold hover:bg-blue-300 delay-200 duration-200 lg:px-4 lg:py-2 lg:text-lg lg:rounded-md lg:hover:bg-blue-300 lg:delay-200 lg:duration-200"
              >
                Create Department
              </Link>
            </div>
            <div>
              <Image
                src="/moneys.png"
                width={100}
                height={100}
                className="lg:h-[180px] lg:w-[140px]"
              />
            </div>
          </div>
          <div className=" first block-stuff bg-white shadow-sm flex mx-5 py-6 items-center justify-between rounded-lg px-10">
            <div className="flex flex-col space-y-2 text-sm  lg:space-y-8">
              <h1 className="font-semibold text-2xl text-blue-600">
                Mangement
              </h1>
              <Counter />
              <Link
                href="/"
                className="bg-blue-700 px-2 py-1 text-white rounded-sm font-semibold hover:bg-blue-300 delay-200 duration-200 lg:px-4 lg:py-2 lg:text-lg lg:rounded-md lg:hover:bg-blue-300 lg:delay-200 lg:duration-200"
              >
                Create Department
              </Link>
            </div>
            <div>
              <Image
                src="/plus.png"
                width={100}
                height={100}
                className="lg:h-[100px] lg:w-[120px]"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center lg:text-3xl font-semibold mt-10">Statistics</p>
      <div className="flex space-y-7 mt-[50px] flex-col items-center lg:flex lg:flex-row lg:justify-evenly lg:items-center">
        <div className=" w-[350px] lg:w-[550px]">
          <Charts />
        </div>
        <div className=" w-[300px] lg:w-[400px]">
          <Pie />
        </div>
      </div>
      <section className="mx-4 mt-8 bg-white lg:mx-9 space-y-8 shadow-md rounded-md">
        <div className="flex px-[20px] justify-between items-center lg:px-[50px] pt-8 ">
          <div className="flex items-center space-x-3">
            <h1 className="font-semibold text-xl lg:text-2xl  ">
              Best Student
            </h1>
            <Image src="/star.png" width={30} height={30} />
          </div>
          <div className="text-2xl ">
            <BiDotsVerticalRounded />
          </div>
        </div>
        <Table />
      </section>
      <Competion />
      <Last />
    </div>
  );
}

export default page;
