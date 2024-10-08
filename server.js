import express from "express";
import dotenv from "dotenv";
import register from "./router/register.js";
import cors from "cors";
import { registerValidationSchema } from "./validationSchema/registerValidationSchema.js";
import { validateRequest } from "./helpers/validateRequest.js";
import connect from "./db/index.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
connect()
app.post("/register", registerValidationSchema, validateRequest, register);

app.listen(3000, () => {
  console.log("Server running on 3000");
});
