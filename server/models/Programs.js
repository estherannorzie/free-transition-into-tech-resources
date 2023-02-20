const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  name: { 
    type: String
  },
  URL: { 
    type: String
  },
  description: { 
    type: String 
  },
  type: { 
    type: Number 
  },
  country: { 
    type: Number 
  },
  lengthInWeeks: { 
    type: Number 
  },
  careerGuidance: { 
    type: Boolean 
  },
  additionalResources: { 
    type: String 
  },
})

module.exports = mongoose.model('Program', ProgramSchema);