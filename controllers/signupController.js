const { ObjectId } = require('mongodb');
const User  = require('../models/User');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60; // 3 days in seconds

const createToken = (id) => {
    return jwt.sign({ id }, 'secret', {
        expiresIn: maxAge,
    });
};

const postSignup = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        
        const user = await User.create({ email, password });

        if(!user) {
            res.status(400).json({ message: 'User not created' });
            return;
        }

        const token = createToken(user._id); // create a token for the user with the user's id
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 }); // set the cookie to the token on the response

        res.status(200).json({ message: 'User created', user: user._id, email: email, token: token });
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { postSignup };