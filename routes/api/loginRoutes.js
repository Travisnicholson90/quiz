const express = require('express');
const { postLogin } = require('../../controllers/loginController');
const router = express.Router();

// POST /api/login
router.route('/').post(postLogin);
/* req.body === { "email": "", "password": "" } */

module.exports = router;