const { Schema, model, Types } = require('mongoose');


//create a schema for the quiz
const QuizSchema = new Schema(
    {
        title: { 
            type: String,
            required: true,
        },
        // array of questions and answers
        questions: [ 
            {
                // question text
                question: { 
                    type: String,
                    required: true,
                },
                // array of answer objects for each question with answer text and a boolean for whether it's correct
                answers: [ 
                    {
                        answer: {
                            type: String,
                            required: true,
                        },
                        correct: {
                            type: Boolean,
                            required: true,
                        },
                    },
                ],
            },
        ],
    }
);

// structure the req.body to match the schema
// req.body ===
// { "title": "",
// "questions": [{
//     "question": "",
//     "answers": [
//     { "answer": "", "correct": true },
//     { "answer": "", "correct": false },
//     { "answer": "", "correct": false },
//     { "answer": "", "correct": false }
// ] }]}


const HtmlQuiz = model('Quiz', QuizSchema);

module.exports = HtmlQuiz;