const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config()


const URI = process.env.DATABASE_URL;

const connectDB = async () => {
  try {
    const con = await mongoose.connect(URI);
    console.log("DB Connected Successfully ✅");
  } catch (e) {
    console.log(`Authentication to database failed ❗`);
    process.exit(1);
  }
};

module.exports = connectDB;
