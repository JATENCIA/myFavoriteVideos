import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    const mongodb = await mongoose.connect(`${config.MONGODB_URI}`);
    if (mongodb) console.log(`Connected to MongoDB ${mongodb.connection.name}`);
  } catch (error) {
    console.log({ message: `Error connection to MongoDB ${error}` });
  }
})();
