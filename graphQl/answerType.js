import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from "graphql";

const stringNonNull = { type: new GraphQLNonNull(GraphQLString) };

const AnswerType = new GraphQLObjectType({
  name: "Answer",
  fields: () => ({
    questionId: stringNonNull,
    body:stringNonNull,
  })
});

export default AnswerType;