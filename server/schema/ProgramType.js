const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = require("graphql");

const ProgramType = new GraphQLObjectType({
  name: "Program",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    specialty: { type: new GraphQLNonNull(GraphQLString) },
    URL: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLInt) },
    country: { type: new GraphQLNonNull(GraphQLInt) },
    lengthInWeeks: { type: GraphQLInt },
    offersCareerGuidance: { type: new GraphQLNonNull(GraphQLBoolean) },
    onHiatus: { type: new GraphQLNonNull(GraphQLBoolean) },
    additionalResources: { type: GraphQLString },
  }),
});

module.exports = ProgramType;