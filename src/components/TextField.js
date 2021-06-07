import React from "react";
import { useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log({ field, meta });
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input id={field.name} />
    </div>
  );
};
