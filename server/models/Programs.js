const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  name: { 
    type: String
  },
  description: { 
    type: String 
  },
  type: { 
    type: String 
  },
  country: { 
    type: String 
  },
  lengthInWeeks: { 
    type: String 
  },
  careerGuidance: { 
    type: Boolean 
  },
  additionalResources: { 
    type: String 
  },
})

module.exports = mongoose.model('Program', ProgramSchema);