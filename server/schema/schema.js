const { programs } = require('../sampleData.js');

const { 
  GraphQLObjectType, 
  GraphQLID, 
  GraphQLString, 
  GraphQLBoolean, 
  GraphQLUnionType, 
  GraphQLSchema 
} = require('graphql');

const ProgramType = new GraphQLObjectType({
  name: 'Program',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    type: { type: GraphQLID },
    hours: { type: GraphQLString },
    country: { type: GraphQLString },
    lengthInMonths: { type: GraphQLString },
    careerGuidance: { type: GraphQLBoolean },
    additionalResources: { type: GraphQLUnionType },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    program: {
      type: ProgramType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return programs.find(program => program.id == args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});