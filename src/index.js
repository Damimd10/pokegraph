const { GraphQLServer } = require('graphql-yoga');
const { fileLoader, mergeTypes } = require('merge-graphql-schemas');
const path = require('path');

const typeDefs = `
  type Query {
    berries(id: String!): Berry
  }
  type Berry {
    id: Int!
    name: String!
  }
`;

const resolversArray = fileLoader(path.join(__dirname, './**/resolvers.*'));
const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typesMerged = mergeTypes(typesArray);

const options = { port: 4000 };
const server = new GraphQLServer({ typeDefs: typesMerged, resolvers: resolversArray });
server.start(options, () => console.log('Server is running on localhost:' + options.port));
