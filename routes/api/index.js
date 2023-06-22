const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const logoutRoutes = require('./logoutRoutes');
const signupRoutes = require('./signupRoutes');
const quizRoutes = require('./quizRoutes');

router.use('/signup', signupRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/quiz', quizRoutes);

module.exports = router;