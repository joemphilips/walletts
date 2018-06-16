import {  makeExecutableSchema } from 'graphql-tools';
import { typeDef as Account } from './account';
import { typeDef as Channel } from './channels';
import { typeDef as Person } from './person';
import { typeDef as Project } from './project';
import { Query } from './query';
import { typeDef as Scalars } from './scalars';
// tslint:disable no-if-statement

const resolvers = {
  Account: {
    __resolveType(data): string {
      if(data.kind === "PROJECT") {
        return "ProjectAccount"
      }
      if (data.kind === "COMMUNITY") {
        return "CommunityAccount" 
      }
      return "IndividualAccount"
    }
  }
}

// tslint:disable no-empty no-console
export const schema = makeExecutableSchema({
  typeDefs: [Query, Account, Person, Project, Scalars, Channel],
  resolvers
});

console.log(`schema is`);
console.log(schema);
