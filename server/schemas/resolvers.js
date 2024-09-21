const { Choice, Question } = require('../models');

const resolvers = {
  Query: {
    questions: async () => {
      return await Question.find({}).populate('choices');
  
    },
  },
  
  Mutation: {
    updateResponses: async (parent, { _id}) => {
      const vote = await Choice.findOneAndUpdate(
        { _id },
        { $inc: { responses : 1 } },
        { new: true }
      );
      return vote;
    },
},
}

module.exports = resolvers;