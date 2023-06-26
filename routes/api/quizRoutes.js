const router = require('express').Router();

const { getQuiz, postQuiz, postQuizResults, deleteQuizResults, getAllQuizzes } = require('../../controllers/quizController')

// GET /api/quiz
router.route('/').get(getAllQuizzes);

// GET /api/quiz
router.route('/:id').get(getQuiz);

// POST /api/quiz
router.route('/').post(postQuiz);
/* req.body ===
{ "title": "", 
"questions": [{ 
    "question": "",
    "answers": [
    { "answer": "", "correct": true }, 
    { "answer": "", "correct": false }, 
    { "answer": "", "correct": false }, 
    { "answer": "", "correct": false }
] }]} */

//post user quiz results to user model
// api/quiz/score/quizId/:userId
router.route('/score/:quizId/:userId').post(postQuizResults);
/* req.params === { "quizId": "", "userId": "" }
req.body === { "score": 0} */

//delete user quiz results from user model
router.route('/score/:quizId/:userId').delete(deleteQuizResults);


module.exports = router;