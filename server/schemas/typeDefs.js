const typeDefs = `
  type Question {
    _id: ID
    name: String
    # Add a queryable field to retrieve an array of Choice objects
    choices: [Choice]
  }

  type Choice {
    _id: ID
    name: String
    responses: Int
  }

  type Query {
    questions: [Question]

  }
  type Mutation {
    updateResponses(_id: String!): Choice
  }
`;

module.exports = typeDefs;
