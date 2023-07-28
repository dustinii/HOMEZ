const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/homezDB');

module.exports = mongoose;