const mongoose = require('mongoose')
const dotenv = require("dotenv");
const PORT = process.env.PORT || 8000
dotenv.config()

const Connect = async () =>{
  try {
    await mongoose.connect(process.env.MONGO)
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
    throw error
  }
}

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

module.exports = Connect