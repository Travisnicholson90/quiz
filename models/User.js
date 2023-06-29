const { Schema, model, Types } = require('mongoose');
const Quiz = require('./Quiz');
const bcrypt = require('bcrypt');

//create user schema
const UserSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    quizzes: [
      {
        quiz: {
          type: Schema.Types.ObjectId,
          ref: 'Quiz',
        },
        score: {
          type: Number,
          required: true,
          created: {
            type: Date,
            default: Date.now
          }
        },
      },
        {
          toJSON: {
            virtuals: true,
        },
        id: false,
      },
    ],
  });
  
  // create a virtual called quiz that take the quiz id from the quizzes array and finds the quiz
  UserSchema.virtual('quiz', {
    ref: 'Quiz',
    localField: 'quizzes.quiz',
    foreignField: '_id',
  });

  //create a virtual that takes the created date and formats it to a string
  UserSchema.virtual('createdDate').get(function () {
    return this.created.toDateString();
  });

//hash user password
UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//create a static method to login user
UserSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('Incorrect password');
    }
    throw Error('Incorrect email');
}

const User = model('User', UserSchema);

module.exports = User;