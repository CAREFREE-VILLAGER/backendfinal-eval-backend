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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
