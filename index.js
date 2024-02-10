const express = require('express');

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const homeRoutes = require('./routes/homeRoutes');

require('dotenv').config();





const app = express();


app.use(express.json());

app.use('/', homeRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
