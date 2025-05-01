require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


// Routes
const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/payment');
const sensorRoutes = require('./routes/sensors');
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/sensors', sensorRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
