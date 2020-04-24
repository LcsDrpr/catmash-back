var express = require('express');
var cors = require('cors');
var app = express();

var whitelist = [
    `http://localhost:3000`,
    `https://choosecat.herokuapp.com/`,
]

var corsOptions = {
    origin: function (origin, callback) {
        console.log('IM HERE TESTING CORS')
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true
}

module.exports = corsOptions;