const { ObjectId } = require('mongodb');
const User  = require('../models/User');

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            res.status(400).json({ message: 'User not found' });
            return;
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getUserQuizzes = async (req, res) => {
    try {
        const getUserQuiz = await User.findById(req.params.id).populate('quizzes.quiz');

        if(!getUserQuiz) {
            res.status(400).json({ message: 'User not found' });
            return;
        }

        res.status(200).json(getUserQuiz);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { getUserById, getUserQuizzes };