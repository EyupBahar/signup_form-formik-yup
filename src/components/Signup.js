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
            <TextField label="Last Name" name="LastName" type="text" />
            <TextField label="Email" name="Email" type="email" />
            <TextField label="Password" name="Password" type="password" />
            <TextField
              label="Confirm Password"
              name="ConfirmPassword"
              type="password"
            />
            <TextField
              label="I accept terms & conditions"
              name="aggreeToTerms"
              type="ckeckbox"
            />
            <button className="btn btn-dark mt-3">Register</button>
            <button className="btn btn-danger mt-3 ml-3">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
