import * as Yup from "yup";

export const validationRegex = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>?~]/;
export const validationSchema = {
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: Yup.string()
    .required("Your password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(validationRegex, "Password must contain a special character"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
};
