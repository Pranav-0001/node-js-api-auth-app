import mongoose from "mongoose";

export default async function connect() {
  try {
    mongoose.connect()
  } catch (err) {}
}
