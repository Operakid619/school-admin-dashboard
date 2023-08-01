import React from "react";

function Update() {
  return (
    <div className="lg:h-[300px] lg:w-[600px] bg-white shadow-md rounded-md lg:mt-[90px] w-[350px] mt-[20px]  ">
      <h1 className=" pt-4 text-center lg:text-2xl font-serif font-semibold text-red-400 ">
        Student Bio
      </h1>
      <div className="lg:flex lg:justify-between lg:px-6 lg:mt-[50px] lg:items-center flex  justify-between px-5  items-center pt-7">
        <div className="space-y-4">
          <div>FirstName </div>
          <div>LastName</div>
          <div>Email</div>
          <div>Age</div>
        </div>
        <div className="space-y-4">
          <div>Grade</div>
          <div>Gender</div>
          <div>Religion</div>
        </div>
      </div>
    </div>
  );
}

export default Update;
