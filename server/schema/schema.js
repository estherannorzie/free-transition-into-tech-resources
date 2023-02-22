const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

const Program = require("../models/Program");

const ProgramType = new GraphQLObjectType({
  name: "Program",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    URL: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLInt) },
    country: { type: new GraphQLNonNull(GraphQLInt) },
    lengthInWeeks: { type: GraphQLInt },
    careerGuidance: { type: new GraphQLNonNull(GraphQLBoolean) },
    additionalResources: { type: GraphQLString },
  }),
});

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

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProgram: {
      type: ProgramType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        URL: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(GraphQLInt) },
        country: { type: new GraphQLNonNull(GraphQLInt) },
        lengthInWeeks: { type: GraphQLInt },
        careerGuidance: { type: new GraphQLNonNull(GraphQLBoolean) },
        additionalResources: { type: GraphQLString },
      },
      resolve(parent, args) {
        const program = new Program({
          name: args.name,
          URL: args.URL,
          description: args.description,
          type: args.type,
          country: args.country,
          lengthInWeeks: args.lengthInWeeks,
          careerGuidance: args.careerGuidance,
          additionalResources: args.additionalResources,
        });
        return program.save();
      },
    },
    deleteProgram: {
      type: ProgramType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Program.findByIdAndRemove(args.id);
      },
    },
    updateProgram: {
      type: ProgramType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        URL: { type: GraphQLString },
        description: { type: GraphQLString },
        type: { type: GraphQLInt },
        country: { type: GraphQLInt },
        lengthInWeeks: { type: GraphQLInt },
        careerGuidance: { type: GraphQLBoolean },
        additionalResources: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Program.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              URL: args.URL,
              description: args.description,
              type: args.type,
              country: args.country,
              lengthInWeeks: args.lengthInWeeks,
              careerGuidance: args.careerGuidance,
              additionalResources: args.additionalResources,
            }
          },
          { new: true },
        );
      },
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
