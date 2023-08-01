import mongoose from "mongoose";

async function Connect() {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected");
  }

  try {
    await mongoose.connect(
      "mongodb+srv://emmanuelugwu1004:Operakid619@cluster0.662awdp.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

export default Connect;
