// BACKEND/seedAdmin.js
// seedAdmin.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/user.js'); // Adjust path to your User model
require('dotenv').config(); // Ensure you have dotenv installed

const seedAdmin = async () => {
  try {
    // 1. Connect to DB
    await mongoose.connect(process.env.MONGODB_URL); // Make sure MONGO_URI is in your .env
    console.log('MongoDB Connected');

    // 2. Check if admin exists
    const existingAdmin = await User.findOne({ email: 'admin@example.com' });
    if (existingAdmin) {
      console.log('Admin already exists');
      process.exit();
    }

    // 3. Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt); // Password is 'admin123'

    // 4. Create Admin
    const newAdmin = new User({
      name: 'Super Admin',
      email: 'admin@example.com',
      password: hashedPassword,
      role: 'admin',
      // Fields below are not required for admin based on your schema logic,
      // but if validation fails, provide dummy data:
      phoneNumber: '0000000000', 
    });

    await newAdmin.save();
    console.log('Admin created successfully! Login with: admin@example.com / admin123');
    
    process.exit();
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();