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
    createQuestion: {
      type: QuestionType,
      description: "Create a question",
      args: {
        topic: stringNonNull,
        body: stringNonNull,
        answer: stringNonNull
      },
      resolve(parent, args) {
        Question.create(
          { topic: args.topic, body: args.body, answer: args.answer },
          function(err) {
            if (err) return console.log(err);
          }
        );
      }
    },
    deleteQuestion: {
      type: QuestionType,
      description: "Delete a question",
      args: {
        id: stringNonNull
      },
      resolve(parent, args) {
        Question.findByIdAndRemove(args.id, function(err) {
          if (err) return console.log(err);
        });
      }
    },
    updateQuestion: {
      type: QuestionType,
      description: "Update a question",
      args: {
        id: stringNonNull,
        topic: stringNonNull,
        body: stringNonNull,
        answer: stringNonNull
      },
      resolve(parent, args) {
        Question.findOneAndUpdate(
          { id: args.id },
          args,
          { new: true }
        );
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
