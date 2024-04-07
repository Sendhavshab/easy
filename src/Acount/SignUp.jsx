import { Form, Formik, useFormik } from "formik";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { IoMdArrowRoundBack } from "react-icons/io";
import Input from "../Input";
import { UserProviderHOC } from "../HOC/Context";

const SignUpPage = ({UserAccountAPICaller}) => {




  function DataServerSender(value) {

    UserAccountAPICaller(value);
  }
  const schema = useMemo(function () {
    return Yup.object().shape({
      name: Yup.string().min(4).required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(8).required(),
    });
  }, []);

  const initialValues = {
    name: "",
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
          <div className="bg-indigo-950 p-6 rounded-lg flex flex-col md:block gap-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white opacity-40">
              Join AnkiKart
            </h2>

            <Input
              label="Your Name"
              required
              placeholder="Your Name"
              id="input1"
              type="text"
              name="name"
              brClass
            />

            <Input
              brClass
              id="input3"
              placeholder="ex. - abc@example.com"
              type="email"
              name="email"
              autoComplete="email"
              label="Your Email"
              required
            />

            <Input
              brClass
              id="input2"
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="your password"
              label="password"
              required
              className=""
            />

            <button
              type="submit"
              className="bg-blue-500 text-white md:w-full rounded-full md:my-4 disabled:bg-blue-300 disabled:text-gray-200 hover:bg-blue-400 font-bold px-4 py-2"
            >
              Sign Up
            </button>
            <p className="font-bold text-white ">
              have an account{" "}
              <Link className="text-blue-600 underline" to="/login">
                Sign In
              </Link>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserProviderHOC(SignUpPage);
