const { Schema, model } = require('mongoose');

const choiceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    responses: {
      type: Number
    },
    }
);

const Choice = model('Choice', choiceSchema);

module.exports = Choice;
