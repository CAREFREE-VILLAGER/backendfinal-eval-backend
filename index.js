const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const homeRoutes = require('./routes/homeRoutes');
const cors = require('cors');

require('dotenv').config();





const app = express();


app.use(express.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/', homeRoutes);
const corsOptions = {
  origin: 'http://localhost:3001/',
  optionsSuccessStatus: 200,
  credentials: true
  
}

app.use(cors(corsOptions));


app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//db.js


const mongoose = require('mongoose');
const dotenv = require('dotenv').config(); 

const mongoUrl = process.env.MONGODB_URL;
const config = {
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
    useUnifiedTopology: true
  }

//   const connectDB = async ()=>{
//     try{
//         await mongoose.connect(mongoUrl,config);
//         console.log('MongoDB connected');
//     }catch(err){
//         console.log("MongoDB connection error:",err);
//     }
//   };
mongoose.connect(mongoUrl,config).then(() => {
    console.log('MongoDB connected');
}).catch(err => console.error('MongoDB connection error:', err));

module.exports= mongoose.connection;