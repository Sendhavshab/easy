import { useField } from "formik";
import React from "react";

function Input({ id, className, name, label, brClass, ...props }) {
  const [Data, Meta] = useField(name);
  const { onBlur, onChange, value } = Data;
  const { error, touched } = Meta;

  return (
    <>
      <label htmlFor={id} className="text-white opacity-40">
        {label}
      </label>
      <input
        id={id}
        value={value}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        {...props}
        className={`bg-blue-800 hover:bg-blue-700  rounded-full placeholder-gray-500 text-white px-4 py-2 ${className} ${
          error && touched
            ? "border-2 border-red-700 "
            : " border border-gray-500 focus:border-green-600"
        } ${brClass && "my-3 mx-2"}`}
      />
      {brClass && <br className="hidden md:block"></br>}
      {touched && error && (
        <div className="text-red-700 font-bold text-center">{error}</div>
      )}
    </>
  );
}

export default Input;
