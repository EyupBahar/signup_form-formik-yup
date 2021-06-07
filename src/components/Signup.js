import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "./TextField";

export const Signup = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    confirmPassword: "",
    aggreeToTerms: false,
  };
  return (
    <Formik initialValues={initialValues}>
      {(formik) => (
        <div>
          <h1 className="my-4 font-wight-bold-display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="First Name" name="firstName" type="text" />
          </Form>
        </div>
      )}
    </Formik>
  );
};
