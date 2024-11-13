require('dotenv').config();
require('./config/database');
const express = require('express');
const morgan = require('morgan');


// Controllers
const testJWTRouter = require('./controllers/test-jwt');
const userController = require('./controllers/users.js')
const hootsRouter = require('./controllers/hoots.js');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

// Public Routes
app.use('/users', userController);
app.use('/test-jwt', testJWTRouter);
app.use('/hoots', hootsRouter);


// Protected Routes

app.listen(3000, () => {
  console.log('The express app is ready!');
});