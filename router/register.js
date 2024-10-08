import { matchedData } from "express-validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { response200 } from "../responses/successResponses.js";
export default async function register(req, res) {
  try {
    const requestData = matchedData(req);
    console.log({ requestData });
    let user = await userModel.findOne({
      email: requestData?.email,
      status: true,
    });
    if (user) {
      return res
        .status(409)
        .json({ status: false, message: "Email already exists" });
    }
    const password = await bcrypt.hash(requestData?.password, 10);
    user = await new userModel({
      ...requestData,
      password,
    }).save();
    console.log({ user: user });
    const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY);
    user.token = token;

    response200(res, user, "User registered successfully");
  } catch (error) {
    console.log({ error });
  }
}
