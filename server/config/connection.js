// Base connection file to connect to the database via MongoDB
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/homez_db');

module.exports = mongoose.connection;