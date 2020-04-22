const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

//initializations
const app = express();
require('./config/fakeDB.config');

// Settings
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));
app.use(cors());

// Global variables

// Routes
app.use(require('./routes/data.route'));

module.exports = app;