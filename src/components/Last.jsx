import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaFacebookSquare, FaPhone, FaSearchLocation } from "react-icons/fa";
import Image from "next/image";

function Last() {
  return (
    <div className="mt-6 bg-slate-900 shadow-md lg:mx-7 rounded-md text-white pb-5 ">
      <div className="every lg:flex lg:justify-between px-3 pt-7 grid grid-cols-2 gap-x-[150px] gap-y-[50px] ">
        <div className=" pl-8 space-y-7">
          <h1 className="font-semibold text-sm lg:text-base ">ABOUT US</h1>
          <p className=" block lg:w-[350px] text-left w-[200px] text-sm lg:">
            Welcome to{" "}
            <span className="font-bold text-blue-600">Preschool</span> School, A
            renowned institution dedicated to providing exceptional education
            and nurturing young minds. With a rich history spanning over 10
            years, we have consistently upheld our commitment to academic
            excellence, character development, and a holistic approach to
            learning.
          </p>
          <div className="flex space-x-2 items-center lg:space-x-7 ">
            <Image
              src="/face.png"
              width={50}
              height={50}
              className="text-blue-600"
            />
            <Image src="/twitter.png" width={70} height={70} className=" " />
            <Image src="/instagram.png" width={40} height={40} className=" " />
          </div>
        </div>

        <div className="contact every space-y-2 ">
          <h1 className="font-semibold text-sm lg:text-base pr-3">SERVICES</h1>
          <h1>Registration</h1>
          <h1>School Fees</h1>
          <h1>facilties</h1>
          <h1>Careers</h1>
        </div>
        <div className="pl-8  space-y-3 ">
          <h1 className="font-semibold text-sm lg:text-base ">CONTACT</h1>
          <h1>
            <span className="font-semibold">Email:</span> support@preschool.com
          </h1>

          <h1>
            <span className="font-semibold">Phone:</span> +140967353737
          </h1>

          <h1 className="pr-6">
            <span className="font-semibold">Address:</span> Adrain Street Los
            Angeles Usa
          </h1>
        </div>
        <div className="text-white">
          <Image
            src="/shl.png"
            width={200}
            height={200}
            className="text-white"
          />
        </div>
      </div>
      <h1 className=" text-center pb-2 pt-4 text-gray-600">
        Copyright &copy; 2023 All Right Preserved || Created by Operakid
      </h1>
    </div>
  );
}

export default Last;
