import { GraphQLObjectType, GraphQLString , GraphQLInt } from 'graphql';


const QuestionType = new GraphQLObjectType({
  name: 'Question',
  fields: () => ({
    id:{type: GraphQLString},
    topic: {type: GraphQLString},
    body:{type: GraphQLString},
    type: {type: GraphQLString},
    level: {type: GraphQLString},
    value: {type: GraphQLInt},
  })
});

export default QuestionType;