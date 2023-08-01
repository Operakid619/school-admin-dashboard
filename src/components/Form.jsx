"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

function Form() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    age: "",
    Grade: "",
    Gender: "",
    religion: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  // define validation schema
  const validationSchema = Yup.object().shape({
    FirstName: Yup.string()
      .matches(/^[a-zA-Z ]*$/, "First Name can only contain letters")
      .required("First Name is required"),
    LastName: Yup.string()
      .matches(/^[a-zA-Z ]*$/, "First Name can only contain letters")
      .required("First Name is required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address"
      )
      .required("Email is required"),
    age: Yup.number().typeError("Age is required").required("Age is required"),
    Grade: Yup.string().required("Grade is required"),
    Gender: Yup.string().required("Gender is required"),
    religion: Yup.string().required("Religion is required"),
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    // validate input and clear error message
    validationSchema
      .validateAt(name, { [name]: value })
      .then(() => {
        setFormErrors((prevFormErrors) => ({
          ...prevFormErrors,
          [name]: "",
        }));
      })
      .catch((error) => {
        setFormErrors((prevFormErrors) => ({
          ...prevFormErrors,
          [name]: error.message,
        }));
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      const response = await fetch("/Api/AddStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (data.status === "success") {
        toast.success("Student added successfully", {
          position: "top-right",
          autoClose: 2000,
        });
        setFormData({
          FirstName: "",
          LastName: "",
          email: "",
          age: "",
          Grade: "",
          Gender: "",
          religion: "",
        });
        setErrorMessage(""); // clear error message
      } else {
        toast.error("Student not added", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setFormErrors(errors);
        setErrorMessage(
          "Please make sure the form is filled correctly and try Again ."
        );
      } else {
        console.error(error);
      }
    }
  };
  return (
    <>
      <ToastContainer />

      <form
        onSubmit={handleSubmit}
        className="mt-[70px] flex flex-col items-center space-y-5 lg:flex lg:items-start lg:pl-6"
      >
        <div>
          <input
            className="border outline-none pl-5 w-[300px] rounded-md h-[40px]"
            type="text"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleInputChange}
            onBlur={handleInputChange} // add onBlur event handler
            placeholder="First Name"
            required
          />
          {formErrors.FirstName && (
            <div className="text-red-500">{formErrors.FirstName}</div>
          )}
        </div>
        <div>
          <input
            className="border outline-none pl-5 w-[300px] rounded-md h-[40px]"
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            placeholder="Last Name"
          />
          {formErrors.LastName && (
            <div className="text-red-500">{formErrors.LastName}</div>
          )}
        </div>
        <div>
          <input
            className="border outline-none pl-5 w-[300px] rounded-md h-[40px]"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            placeholder="Email"
          />
          {formErrors.email && (
            <div className="text-red-500">{formErrors.email}</div>
          )}
        </div>
        <div>
          <input
            className="border outline-none pl-5 w-[300px] rounded-md h-[40px]"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            placeholder="Age"
          />
          {formErrors.age && (
            <div className="text-red-500">{formErrors.age}</div>
          )}
        </div>
        <div>
          <select
            className="border outline-none px-3 w-[300px] rounded-md h-[40px]"
            name="Grade"
            value={formData.Grade}
            onChange={handleInputChange}
            onBlur={handleInputChange}
          >
            <option value="">Select Grade</option>
            <option value="Male">Grade 1</option>
            <option value="Female">Grade 2</option>
          </select>
          {formErrors.Grade && (
            <div className="text-red-500">{formErrors.Grade}</div>
          )}
        </div>
        <div>
          <select
            className="border outline-none px-3 w-[300px] rounded-md h-[40px]"
            name="Gender"
            value={formData.Gender}
            onChange={handleInputChange}
            onBlur={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {formErrors.Gender && (
            <div className="text-red-500">{formErrors.Gender}</div>
          )}
        </div>
        <div>
          <select
            className="border outline-none px-3 w-[300px] rounded-md h-[40px]"
            name="religion"
            value={formData.religion}
            onChange={handleInputChange}
          >
            <option value="">Select Religion</option>
            <option value="Christianity">Christianity</option>
            <option value="Islam">Islam</option>
          </select>
          {formErrors.religion && (
            <div className="text-red-500">{formErrors.religion}</div>
          )}
        </div>
        <button
          className="bg-slate-900 text-white py-1 px-4 rounded-md shadow-md hover:bg-slate-800 delay-200 lg:ml-[60px] lg:items-center lg:px-10 lg:py-2"
          type="submit"
        >
          Add Student
        </button>
      </form>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
    </>
  );
}

export default Form;
