import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { IoMdArrowRoundBack } from "react-icons/io";

const SignUpPage = () => {
  function DataServerSender(value) {
    console.log("DataServerSender", value.name, value.email, value.password);
  }

  const schema = Yup.object().shape({
    name: Yup.string().min(4).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });

  const { handleChange, values, handleSubmit, errors, handleBlur, touched , isValid , dirty } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      onSubmit: DataServerSender,
      validationSchema: schema,
    });
  console.log(touched.name);

  return (
    <div className="flex items-center justify-center h-screen">
      <Link to="/">
        <IoMdArrowRoundBack size={39} className="fixed left-3 top-16" />
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="bg-indigo-950 p-6 rounded-lg flex flex-col md:block gap-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white opacity-40">
            Join AnkiKart
          </h2>
          <label htmlFor="input1" className="text-white opacity-40">
            Your Name
          </label>
          <input
            onBlur={handleBlur}
            required
            onChange={handleChange}
            placeholder="Your Name"
            id="input1"
            type="text"
            value={values.name}
            name="name"
            className="bg-blue-800 rounded-full md:m-3  text-white px-4 py-2"
          />
          <br className="hidden md:block"></br>
          {touched.name && errors.name && (
            <div className="text-red-700 font-bold ">{errors.name}</div>
          )}
          <label htmlFor="input2" className="text-white opacity-40">
            Your Email
          </label>

          <input
            required
            onBlur={handleBlur}
            onChange={handleChange}
            id="input2"
            value={values.email}
            placeholder="ex. - abc@example.com"
            type="email"
            name="email"
            className="bg-blue-800 rounded-full md:m-3  text-white px-4 py-2"
          />
          <br className="hidden md:block"></br>
          {touched.email && errors.email && (
            <div className="text-red-700 font-bold ">{errors.email}</div>
          )}

          <label htmlFor="input3" className="text-white opacity-40">
            Password
          </label>
          <input
            required
            onChange={handleChange}
            id="input3"
            onBlur={handleBlur}
            type="password"
            value={values.password}
            placeholder="make strong password"
            name="password"
            className="bg-blue-800 md:m-3 rounded-full text-white px-4 py-2"
          />
          <br className="hidden md:block"></br>
          {touched.password && errors.password && (
            <div className="text-red-700 font-bold ">{errors.password}</div>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white md:w-full rounded-full md:my-4 disabled:bg-blue-300 disabled:text-gray-200 hover:bg-blue-400 font-bold px-4 py-2"
            disabled={!isValid || !dirty}
          >
            Sign Up
          </button>
          <p className="font-bold text-white ">
            have an account{" "}
            <Link className="text-blue-600 underline" to="/signin">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
