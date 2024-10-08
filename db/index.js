import mongoose from "mongoose";

export default async function connect() {
  try {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        console.log("MongoDb connected");
      })
      .catch(() => {
        console.log("Mongo connection failed");
      });
  } catch (err) {
    console.log("Error while connecting mongo", err);
  }
}
