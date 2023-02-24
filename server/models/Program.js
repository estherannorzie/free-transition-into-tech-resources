const mongoose = require("mongoose");

const ProgramSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  specialty: {
    type: String,
    enum: [
      "Software Development", 
      "Web Development", 
      "Data Science", 
      "Artificial Intelligence", 
      "Cybersecurity", 
      "Data Analytics", 
      "Information Technology", 
      "UX/UI and Product Design", 
      "Product Management", 
      "Digital Marketing", 
      "Multiple Tracks", 
      "Other"
    ],
  },
  URL: {
    type: String,
  },
  description: {
    type: String,
  },
  type: {
    type: Number,
  },
  country: {
    type: Number,
  },
  lengthInWeeks: {
    type: Number,
  },
  offersCareerGuidance: {
    type: Boolean,
  },
  onHiatus: {
    type: Boolean,
  },
  additionalResources: {
    type: String,
  },
});

ProgramSchema.index(
  {
    name: 1,
    URL: 1,
  },
  {
    unique: true,
    dropDups: true,
  },
);

module.exports = mongoose.model("Program", ProgramSchema);
