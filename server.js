require('dotenv').config();
require('./config/database');
const express = require('express');
const morgan = require('morgan');

// Controllers
const testJWTRouter = require('./controllers/test-jwt');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

// Public Routes
app.use('/test-jwt', testJWTRouter);

// Protected Routes

app.listen(3000, () => {
  console.log('The express app is ready!');
});