import React from "react";
import Form from "../../components/Form";
import Update from "@/components/Update";
import MiniForm from "@/components/MiniForm";

//write a code to fetch data from database and display it in the form

async function page() {
  return (
    <div className="overflow-x-hidden bg-blue-200 h-screen lg:flex lg:justify-between lg:px-[60px] lg:items-center  ">
      <div>
        <h1 className="text-xl pl-3 text-left mt-[85px] lg:pl-[90px]">
          Add Student
        </h1>
        <Form className="overflow-x-hidden" />
      </div>
      <div className="space-y-6 flex flex-col items-center lg:pr-6 ">
        <div className="flex flex-col items-center pb-6">
          <h1 className="text-xl pl-3  lg:pl-[90px] pt-8">Update Student</h1>
          <Update />
        </div>
      </div>
    </div>
  );
}

export default page;
