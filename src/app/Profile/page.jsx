import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="mt-[80px]   bg-slate-100  rounded-md h-screen overflow-x-hidden pb-[30px] ">
      <h1 className="text-3xl font-semibold text-center pt-5"> Profile</h1>
      <div className="major cover  bg-white mx-2 mt-3 space-y-6 overflow-hidden ">
        <div className="flex justify-between items-center px-5 pt-4">
          <h1> profile</h1>
          <h1>dot</h1>
        </div>
        <div className=" for profile flex flex-col items-center pb-[40px] space-y-[40px] bg-white shadow-lg  mx-4 ">
          <Image
            src="/profile.png"
            alt="Student_pix"
            width={150}
            height={150}
            className="pt-6 rounded-lg "
          />
          <div className="social media flex justify-between flex-row space-x-8 pt-[20px]">
            <div className="bg-slate-100 px-4 shadow-md py-1">
              <Image
                src="/facebook.png"
                alt="facebook"
                width={30}
                height={30}
              />
            </div>
            <div className="bg-slate-100 px-4 shadow-md py-1">
              <Image
                src="/instagram.png"
                alt="facebook"
                width={30}
                height={30}
              />
            </div>

            <div className="bg-slate-100 px-4 shadow-md py-1">
              <Image src="/twitter.png" alt="facebook" width={50} height={50} />
            </div>
          </div>
        </div>
        <div className="personal pt-6 mx-3 lg:grid grid-cols-2  lg:items-center pb-[20px] space-y-5">
          <div className="main px-5 space-y-5">
            <h1 className="text-2xl font-semibold">Personal Information</h1>
            <div className="flex  space-x-10 text-xl font-serif text-slate-400">
              <h1>First Name:</h1>
              <h1> Greace </h1>
            </div>
            <div className="flex  space-x-10 text-xl font-serif text-slate-400">
              <h1>Last Name :</h1>
              <h1> Deborah</h1>
            </div>
            <div className="flex  space-x-10 text-xl font-serif text-slate-400">
              <h1>Age :</h1>
              <h1> 15</h1>
            </div>
            <div className="flex  space-x-10 text-xl font-serif text-slate-400">
              <h1>Gender :</h1>
              <h1> Female</h1>
            </div>
          </div>
          <div className="main px-5 space-y-5">
            <div className="flex  space-x-10 text-xl font-serif text-slate-400">
              <h1>Last Name:</h1>
              <h1> Greace </h1>
            </div>
            <div className="flex  space-x-10 text-xl font-serif text-slate-400">
              <h1>Phone :</h1>
              <h1> +123456789</h1>
            </div>
            <div className="flex  space-x-10 text-xl font-serif text-slate-400">
              <h1>Class :</h1>
              <h1> Secondary </h1>
            </div>
            <div className="flex  space-x-10 text-xl font-serif text-slate-400">
              <h1>Religion :</h1>
              <h1>Christian</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
