// Definitions for the server and express, ApolloServer, and path, as well as the middleware for authentication
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth.js');

// Define the typeDefs and resolvers for the server
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// Port settings for the server, establishment of a server variable for ApolloServer, and the middleware for authentication
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

// Middleware for parsing JSON and urlencoded form data that is not extended
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// logic to make app use the client build folder in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// GET route for the server to respond with the index.html file if it doesn't recognize the route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/'));
});

// GET route for the server to respond with the index.html file if it doesn't recognize the route, async function to start the server
const startApolloServer = async () => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
       app.listen(PORT, () => {
              console.log(`API server running on port ${PORT}!`);
              console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
         })
    })
};

// Function call to start the server
startApolloServer();
