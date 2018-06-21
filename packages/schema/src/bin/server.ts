import bodyParser from 'body-parser';
import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { addMockFunctionsToSchema } from 'graphql-tools';
import { schema } from '..';
import { mocks } from '../lib/mocks';

// tslint:disable-next-line
addMockFunctionsToSchema({
  schema,
  mocks,
  preserveResolvers: true
});

const app = express();

// tslint:disable no-expression-statement
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema
  }),
  graphiqlExpress({
    endpointURL: '/graphql'
  })
);

app.listen(3001, () => {
  // tslint:disable-next-line
  console.log(`listening on port ${3001}`);
});
