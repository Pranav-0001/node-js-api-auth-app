import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: true,
    },
    // profilePicture: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "File",
    // },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
