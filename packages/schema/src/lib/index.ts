import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import { typeDef as Account } from './account';
import { typeDef as Person } from './person';
import { typeDef as Project } from './project';
import { Query } from './query';
import { typeDef as Scalars } from './scalars';

// tslint:disable no-empty
const resolvers = {
  Account: (root, args, context) => {
    return "account"
  },
  Person: (root, args, context) => {
    return "Person"
  },
  Query: (root, args, context) => {
    return "Query"
  },
};

export const schema = makeExecutableSchema({
  typeDefs: [Query, Account, Person, Project, Scalars],
  resolvers: resolvers as any
});

export const mockSchema = addMockFunctionsToSchema({schema});
