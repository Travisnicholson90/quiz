const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const logoutRoutes = require('./logoutRoutes');
const signupRoutes = require('./signupRoutes');
const quizRoutes = require('./quizRoutes');
const userRoutes = require('./userRoutes');

router.use('/signup', signupRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/quiz', quizRoutes);
router.use('/user', userRoutes);

module.exports = router;