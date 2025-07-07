const mongoose = require('mongoose');

// ✅ use the correct env variable
const MONGODB_URL = process.env.MONGO_URI || "mongodb://localhost:27017/jwtauth";

const databaseconnect = () => {
  mongoose
    .connect(MONGODB_URL)
    .then((conn) =>
      console.log(`✅ MongoDB connected to: ${conn.connection.name} at ${conn.connection.host}`)
    )
    .catch((err) => console.log(`❌ MongoDB connection failed: ${err.message}`));
};

module.exports = databaseconnect;
