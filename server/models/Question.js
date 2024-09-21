const { Schema, model } = require('mongoose');

const questionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

  choices: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Choice'
    }
  ]
}
);

const Question = model('Question', questionSchema);

module.exports = Question;