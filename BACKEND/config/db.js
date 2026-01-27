// BACKEND/config/db.js
// backend/src/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // 🔴 LOG THE ACTUAL ERROR OBJECT
    console.error('MongoDB connection error:');
    console.error(error);        // full error
    console.error(error.message); // message only

    process.exit(1);
  }
};

module.exports = connectDB;
