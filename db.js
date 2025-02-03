const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGO_URI;

// Remove the deprecated options
mongoose.connect(mongoURL);

const connection = mongoose.connection;

connection.on('error', () => {
    console.log('MongoDB connection failed');
});

connection.on('connected', () => {
    console.log('MongoDB connection successful');
});

module.exports = mongoose;
