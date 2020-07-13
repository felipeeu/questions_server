import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from "graphql";

const stringNonNull = { type: new GraphQLNonNull(GraphQLString) };

const QuestionType = new GraphQLObjectType({
  name: "Question",
  fields: () => ({
    id: stringNonNull,
    topic: stringNonNull,
    body: stringNonNull,
    answer: stringNonNull, 
  })
});

export default QuestionType;
