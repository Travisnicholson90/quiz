const { ObjectId } = require('mongodb');
const User  = require('../models/User');
const Quiz = require('../models/Quiz');

const getAllQuizzes = async (req, res) => {

    try {
        const quizzes = await Quiz.find();

        if (!quizzes) {
            res.status(404).json({ message: 'No quizzes found!' });
            return;
        }

        res.status(200).json(quizzes);
    } catch (err) {
        res.status(500).json(err);
    }
};


const getQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);

        if (!quiz) {
            res.status(404).json({ message: 'No quiz found with this id!' });
            return;
        }

        res.status(200).json(quiz);
    } catch (err) {
        res.status(500).json(err);
    }
};
  
const postQuiz = async (req, res) => {
    try {
        const { title, questions } = req.body;
        console.log(title, questions);
        
        const quiz = await Quiz.create(req.body);

        if(!quiz) {
            res.status(400).json({ message: 'Quiz not created' });
            return;
        }

        res.status(200).json({ message: 'Quiz created', quiz: quiz._id, title: title, questions: questions });
    } catch (err) {
        res.status(500).json(err);
    }
};

// post quiz results to user model
// api/quiz/score/:id(quiz id)/:userId(user id)
const postQuizResults = async (req, res) => {
    try {
      const { quizId, userId } = req.params;
      const { score } = req.body;
      console.log(quizId, userId, score);
  
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { quizzes: { quiz: quizId, score: score } } },
        { new: true }
      );
  
      if (!user) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
  
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  };


  //delete user quiz results from user model
// router.route('/score/:quizId/:userId').delete(deleteQuizResults);

const deleteQuizResults = async (req, res) => {
    try {
      const { quizId, userId } = req.params;
      console.log(quizId, userId);

      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { quizzes: { quiz: quizId } } },
        { new: true }
        );

        if (!user) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};




module.exports = { getQuiz, postQuiz, postQuizResults, deleteQuizResults, getAllQuizzes };
