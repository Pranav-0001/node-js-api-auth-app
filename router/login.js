import { matchedData } from "express-validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { response200 } from "../responses/successResponses.js";
import { response401, response404 } from "../responses/errorResponse.js";
export default async function login(req, res) {
  try {
    const requestData = matchedData(req);
    console.log({ requestData });
    let user = await userModel.findOne({
      email: requestData?.email,
      status: true,
    });
    if (!user) {
      return response404(res, "user not found");
    }
    const isValidPassword = await bcrypt.compare(
      requestData?.password,
      user?.password
    );
    if (!isValidPassword) {
      return response401(res, "Invalid username or password");
    }
    const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY);
    user.token = token;

    response200(res, user, "User loggedin successfully");
  } catch (error) {
    console.log({ error });
  }
}
