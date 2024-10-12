import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connect from "./db/index.js";
import { validateRequest } from "./helpers/validateRequest.js";
import login from "./router/login.js";
import register from "./router/register.js";
import { loginValidationSchema } from "./validationSchema/loginValidationSchema.js";
import { registerValidationSchema } from "./validationSchema/registerValidationSchema.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
connect()
app.post("/register", registerValidationSchema, validateRequest, register);
app.post("/login",loginValidationSchema,validateRequest,login)

app.listen(3000, () => {
  console.log("Server running on 3000");
});
