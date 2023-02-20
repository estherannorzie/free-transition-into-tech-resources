const { 
  GraphQLObjectType, 
  GraphQLNonNull,
  GraphQLID, 
  GraphQLString, 
  GraphQLBoolean, 
  GraphQLList,
  GraphQLSchema 
} = require('graphql');

const Program = require('../models/Programs');

const ProgramType = new GraphQLObjectType({
  name: 'Program',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: GraphQLString },
    country: { type: GraphQLString },
    lengthInWeeks: { type: GraphQLString },
    careerGuidance: { type: GraphQLBoolean },
    additionalResources: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    programs: {
      type: new GraphQLList(ProgramType),
      resolve(parent, args) {
        return Program.find();
      } 
    },
    program: {
      type: ProgramType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Program.findById(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});