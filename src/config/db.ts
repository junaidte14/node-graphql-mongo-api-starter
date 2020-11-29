import mongoose from "mongoose";
import env from "../environment";

const connectDB = async () => {
  try {
    await mongoose.connect(env.getDBURL(), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
