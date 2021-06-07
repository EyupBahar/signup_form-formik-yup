import React from "react";
import { useField, ErrorMessage } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none`}
        id={field.name}
        {...field}
        {...props}
        autocomplete="off"
      />
      <ErrorMessage components="div" name={field.name} />
    </div>
  );
};
