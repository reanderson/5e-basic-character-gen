const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Character = new Schema({
  // Basic (required) Character Details
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  alignment: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  totalLevel: {
    type: Number,
    default: 1
  },
  class: {
    type: String,
    required: true
  },

  // Race details & Racial Features
  race: {
    type: String,
    required: true,
  },
  subrace: {
    type: String
  },
  size: {
    type: String,
    default: "Medium"
  },
  speed: {
    type: Number,
    default: 30
  },
  raceFeats: {} /*might not need this one*/,

  // Background
  background: {
    type: String,
    required: true
  },

  // Class Options
  features: {},

  // proficiencies
  armor: [String],
  weapons: [String],
  skills: [String],
  tools: [String],
  languages: [String],
  savingThrows: [String],

  // stats
  str: {
    type: Number,
    required: true
  },
  dex: {
    type: Number,
    required: true
  },
  con: {
    type: Number,
    required: true
  },
  int: {
    type: Number,
    required: true
  },
  wis: {
    type: Number,
    required: true
  },
  cha: {
    type: Number,
    required: true
  },

  // Other necessary information
  totalHp: {
    type: Number,
    required: true
  },
  proficiencyMod: {
    type: Number,
    default: 2
  },
  equipment: [String],
  gold: {
    type: Number,
    default: 0
  },


  // Other (optional) details
  image: String,
  appearance: String,
  personality: String,
  backstory: String,

  characteristics: {},

  // User
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  username: {
    type: String
  },

  // public flag
  public: {
    type: Boolean,
    default: false,
    required: true
  }
})

module.exports = mongoose.model('Character', Character);