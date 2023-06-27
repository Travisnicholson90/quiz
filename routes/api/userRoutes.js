const express = require('express');
const router = express.Router();

const { getUserById } = require('../../controllers/userController');

// GET User by ID /api/user/:id
router.route('/:id').get(getUserById);


module.exports = router;