
const mongoose = require('mongoose');
const dotenv = require('dotenv').config(); 

const mongoUrl = process.env.MONGODB_URL;
const config = {
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
    useUnifiedTopology: true
  }
mongoose.connect(mongoUrl,config).then(() => {
    console.log('MongoDB connected');
}).catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;
