import mongoose from "mongoose";

if (!process.env.MONGO_URI) {
  throw new Error("Something went wrong with mongodb URL");
}

const catched = global.mongoose;

if (!catched) {
  catched = global.mongoose = { connection: null, Promise: null };
}

async function connectToDatabase() {
  if (catched.connection) {
    return catched.connection;
  }

  if (!catched.Promise) {
    const opts = {
      bufferCommands: false,
    };
    catched.Promise = mongoose
      .connect(process.env.MONGO_URI, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  try {
    catched.connection = await catched.Promise;
  } catch (e) {
    catched.Promise = null;
  }
  return catched.connection;
}

export default connectToDatabase;
