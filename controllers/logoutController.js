const { ObjectId } = require('mongodb');
const User  = require('../models/User');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60; // 3 days in seconds

const createToken = (id) => {
    return jwt.sign({ id }, 'secret', {
        expiresIn: maxAge,
    });
};

const postLogout = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 }); // set the cookie to an empty string and set the maxAge to 1 millisecond
    res.redirect('/'); // redirect to the home page
};

module.exports = { postLogout };