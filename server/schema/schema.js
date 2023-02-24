const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

const Program = require("../models/Program");
const ProgramType = require("../schema/ProgramType");
const ProgramMutation = require("../mutations/ProgramMutation");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    programs: {
      type: new GraphQLList(ProgramType),
      resolve(parent, args) {
        return Program.find();
      },
    },
    program: {
      type: ProgramType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Program.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: ProgramMutation,
});
