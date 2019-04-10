import { GraphQLServer } from 'graphql-yoga';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import * as path from 'path';

const resolversArray = fileLoader(path.join(__dirname, './**/resolvers.*'));
const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typesMerged = mergeTypes(typesArray);

const options = { port: 4000 };
const server = new GraphQLServer({ typeDefs: typesMerged, resolvers: resolversArray });
server.start(options, () => console.log('Server is running on localhost:' + options.port));
