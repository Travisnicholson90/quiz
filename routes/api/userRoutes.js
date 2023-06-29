const express = require('express');
const router = express.Router();

const { getUserById, getUserQuizzes } = require('../../controllers/userController');

// GET User by ID /api/user/:id
router.route('/:id').get(getUserById);

// GET user quizzes /api/user/:id/quizzes
router.route('/:id/quizzes').get(getUserQuizzes);


module.exports = router;