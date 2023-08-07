const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const todoSchema = new Schema({
  name: { type: String, required: true },
  sid: { type: String, required: true },
});

const Quiz = mongoose.model("examrecords", todoSchema);
module.exports = Quiz;