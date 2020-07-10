import{ GraphQLSchema, GraphQLObjectType, GraphQLString} from 'graphql';
import questionGraphQLType from './questionType'
import Question from '../DBmodels/questions'

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  description: "Schema root",
  fields: {
    question: {
      type: questionGraphQLType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        return Question.findById(args.id)
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
});