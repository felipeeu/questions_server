import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} from "graphql";

import Question from "../DBmodels/questions";

const stringNonNull = { type: new GraphQLNonNull(GraphQLString) };

const QuestionType = new GraphQLObjectType({
  name: "Question",
  fields: () => ({
    id: stringNonNull,
    topic: stringNonNull,
    body: stringNonNull,
    answer: stringNonNull
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Schema root",
  fields: {
    question: {
      type: QuestionType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return Question.findById(args.id);
      }
    },
    questions: {
      type: new GraphQLList(QuestionType),
      description: "List of all Questions",
      resolve() {
        return Question.find();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addQuestion: {
      type: QuestionType,
      args: {
        topic: stringNonNull,
        body: stringNonNull,
        answer: stringNonNull
      },
      resolve(parent, args) {
        let question = new Question({
          topic: args.topic,
          body: args.body,
          answer: args.answer
        });
        return question.save();
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
