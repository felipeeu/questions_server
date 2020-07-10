import express from 'express'
import {graphqlHTTP} from 'express-graphql' 
import schema from './graphQl/schema';
import  initDB from'./db';

initDB();

let port = process.env.PORT || 4000;

const app = express();

// app.use(cors());

app.use(
  '/',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port);
console.log('GraphQL API server running at localhost:'+ port);