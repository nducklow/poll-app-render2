const express = require('express');
// Import the ApolloServer class
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const port = process.env.PORT || 8000;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  app.use('/graphql', expressMiddleware(server));

  db.once('open', () => {
    app.listen(port, () => {
      console.log(`API server running on port ${port}!`);
      console.log(`Use GraphQL at http://localhost:${port}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();