const express = require('express');
const router = express.Router();
const { postSignup } = require('../../controllers/signupController');

// POST /api/signup
router.route('/').post(postSignup);
/* req.body === { "email": "", "password": "" }  */ 

module.exports = router;