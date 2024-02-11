
// const mongoose = require('mongoose');
// const dotenv = require('dotenv').config(); 

// const mongoUrl = process.env.MONGODB_URI;
// console.log(process.env.MONGODB_URI);
// const config = {
//     connectTimeoutMS: 30000,
//     socketTimeoutMS: 30000,
//     useUnifiedTopology: true
//   }

//   const connectDB = async ()=>{
//     try{
//         await mongoose.connect(mongoUrl,config);
//         console.log('MongoDB connected');
//     }catch(err){
//         console.log("MongoDB connection error:",err);
//     }
//   };
// mongoose.connect(mongoUrl,config).then(() => {
//     console.log('MongoDB connected');
// }).catch(err => console.error('MongoDB connection error:', err));

// module.exports= mongoose.connection;
