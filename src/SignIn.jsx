import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { IoMdArrowRoundBack } from "react-icons/io";
const SignInPage = () => {
  const DataServerSender = (values) => {
    console.log("DataServerSender", values.email, values.password);
  };

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });

  const { handleChange, values, handleSubmit, errors, handleBlur, touched , dirty , isValid } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: DataServerSender,
      validationSchema: schema,
    });
console.log('dirty is ',  dirty)
  return (
    <div className="flex items-center justify-center h-screen">
      <Link to="/">
        <IoMdArrowRoundBack size={39} className="fixed hidden md:block left-3 top-16" />
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="bg-indigo-950 p-6 rounded-lg flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white opacity-40">
            Welcome back to AnkiKart
          </h2>

          <label htmlFor="input1" className="text-white opacity-40">
            Your Email
          </label>
          <input
            id="input1"
            placeholder="ex. - abc@example.com"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="bg-blue-800 rounded-full text-white px-4 py-2"
          />
          {touched.email && errors.email && (
            <div className="text-red-700 font-bold">{errors.email}</div>
          )}

          <label htmlFor="input2" className="text-white opacity-40">
            Password
          </label>
          <input
            id="input2"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="your password"
            onBlur={handleBlur}
            value={values.password}
            className="bg-blue-800 rounded-full text-white px-4 py-2"
          />
          {touched.password && errors.password && (
            <div className="text-red-700 font-bold">{errors.password}</div>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-full hover:bg-blue-400 font-bold px-4 py-2 disabled:bg-blue-300 disabled:text-gray-200"
            disabled={!isValid || !dirty}
          >
            Sign In
          </button>
          <p className="font-bold text-white">
            Don't have an account{" "}
            <Link className="text-blue-600 underline" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
