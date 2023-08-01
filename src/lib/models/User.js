import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: [true, "Please provide a last name"],
  },
  LastName: {
    type: String,
    required: [true, "Please provide a last name"],
  },
  age: {
    type: Number,
    required: [true, "Please provide age and must be a number"],
  },
  Gender: {
    type: String,
    required: [true, "Please provide a Gender "],

    enum: ["Male", "Female"],
  },
  Grade: {
    type: String,
    required: true,
  },
  religion: {
    type: String,

    required: true,
  },
  picture: {
    data: Buffer,
    contentType: String,
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
