import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { IoMdArrowRoundBack } from "react-icons/io";
import Input from "../Input";

const LogInPage = () => {
  const DataServerSender = (values) => {
    console.log("name is", values.name, "passwords is", values.password);
  };

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Link to="/">
        <IoMdArrowRoundBack
          size={39}
          className="fixed hidden text-gray-400 hover:text-black opacity-60 hover:opacity-100  md:block left-3 top-16"
          title="Go Back"
        />
      </Link>
      <Formik
        initialValues={initialValues}
        onSubmit={DataServerSender}
        validationSchema={schema}
        validateOnMount
      >
        <Form>
          <div className="bg-indigo-950 p-6 rounded-lg flex max-w-72 flex-col gap-4">
            <h2 className="text-xl font-bold text-white opacity-40">
              Welcome back to AnkiKart
            </h2>

            <Input
              id="input1"
              placeholder="ex. - abc@example.com"
              type="email"
              name="email"
              autoComplete="email"
              label="Your Email"
              required
            />

            <Input
              id="input2"
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="your password"
              label="password"
              required
            />

            <button
              type="submit"
              className="bg-blue-500 text-white rounded-full hover:bg-blue-400 font-bold px-4 py-2 disabled:bg-blue-300 disabled:text-gray-200"
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
        </Form>
      </Formik>
    </div>
  );
};

export default LogInPage;
