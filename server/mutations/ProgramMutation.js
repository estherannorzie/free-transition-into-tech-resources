const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLEnumType,
} = require("graphql");

const Program = require("../models/Program");
const ProgramType = require("../schema/ProgramType");

const ProgramMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProgram: {
      type: ProgramType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        URL: { type: new GraphQLNonNull(GraphQLString) },
        specialty: { type: new GraphQLNonNull(new GraphQLEnumType({
          name: "ProgramSpecialty",
          values: {
            SWD: {value: "Software Development"},
            WD: {value: "Web Development"},
            DS: {value: "Data Science"},
            AI: {value: "Artificial Intelligence"},
            CB: {value: "Cybersecurity"},
            DA: {value: "Data Analytics"},
            IT: {value: "Information Technology"},
            UXUIPD: {value: "UX/UI and Product Design"},
            PM: {value: "Product Management"},
            DM: {value: "Digital Marketing"},
            MUL: {value: "Multiple Tracks"},
            OT: {value: "Other"},
          }
        })
        ),
      },
        description: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(GraphQLInt) },
        country: { type: new GraphQLNonNull(GraphQLInt) },
        lengthInWeeks: { type: GraphQLInt },
        offersCareerGuidance: { type: new GraphQLNonNull(GraphQLBoolean) },
        onHiatus: { type: new GraphQLNonNull(GraphQLBoolean) },
        additionalResources: { type: GraphQLString },
      },
      resolve(parent, args) {
        const program = new Program({
          name: args.name,
          specialty: args.specialty,
          URL: args.URL,
          description: args.description,
          type: args.type,
          country: args.country,
          lengthInWeeks: args.lengthInWeeks,
          offersCareerGuidance: args.offersCareerGuidance,
          onHiatus: args.onHiatus,
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
        specialty: { type: GraphQLString },
        URL: { type: GraphQLString },
        description: { type: GraphQLString },
        type: { type: GraphQLInt },
        country: { type: GraphQLInt },
        lengthInWeeks: { type: GraphQLInt },
        offersCareerGuidance: { type: GraphQLBoolean },
        onHiatus: { type: GraphQLBoolean },
        additionalResources: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Program.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              specialty: args.specialty,
              URL: args.URL,
              description: args.description,
              type: args.type,
              country: args.country,
              lengthInWeeks: args.lengthInWeeks,
              offersCareerGuidance: args.offersCareerGuidance,
              onHiatus: args.onHiatus,
              additionalResources: args.additionalResources,
            }
          },
          { new: true },
        );
      },
    }
  },
});

module.exports = ProgramMutation;