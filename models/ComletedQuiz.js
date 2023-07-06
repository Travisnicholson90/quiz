const { Schema, model, Types } = require('mongoose');
const Quiz = require('./Quiz');
const bcrypt = require('bcrypt');

// Create completed quiz schema
const CompletedQuizSchema = new Schema({
  quiz: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz',
  },
  score: {
    type: Number,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = CompletedQuizSchema;