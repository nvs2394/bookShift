const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose');
const fs = require('fs');
mongoose.Promise = global.Promise;

// setup environment variables
require('dotenv').config()

const app = express();
const port = process.env.PORT || 8080;

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => console.log('DB was connected succesful'))
    .catch((err) => console.error(err));

// enable cross domain
app.use(cors());

// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));

// Bootstrap models
fs.readdirSync('./models').forEach(function(file) {
    if (~file.indexOf('.js')) {
        require('./models/' + file);
    }
});

//Note for order of model and router
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/book');

// api
app.use('/auth', authRoutes);
app.use('/book',bookRoutes);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    return res.status(404).json({
        'statusCode': 404,
        'success': false,
        'message': 'Route not found',
        'data': {}
    });
});

app.use(function(err, req, res, next) {
    console.log('***********');
    console.log(err);
    if (err.constructor.name === 'UnauthorizedError') {
        res.status(401).jsonp({
            'statusCode': 401,
            'success': false,
            'message': err.message,
            'data': {}
        });
    } else {
        return res.status(err.status || 500).json({
            'statusCode': err.status || 500,
            'success': false,
            'message': 'Server error',
            'data': {}
        });
    }
});
// Start the server
app.listen(port);

console.log('Book-shift is running at: http://localhost:' + port);
