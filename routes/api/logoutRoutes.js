const express = require('express');
const { postLogout } = require('../../controllers/logoutController');
const router = express.Router();

// POST /api/logout
router.route('/logout').post(postLogout);

module.exports = router;