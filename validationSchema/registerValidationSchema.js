import { body } from "express-validator";

export const registerValidationSchema = [
  body("email").isEmail().withMessage("Enter a valid email address"),
  body("password").isString().withMessage("Password is required"),
];
