const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 8000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/users', authRoutes);
app.use('/posts', authMiddleware.authenticateUser, postRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
