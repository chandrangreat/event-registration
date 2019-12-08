const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: String,
  description: String,
  duration: Number,
  location: String,
  fees: Number,
  tags: [String],
  max_participants: Number,
  configurable_fields: [{
    name: String,
    type: String,
    required: Boolean
  }] 
})

mongoose.model('event', EventSchema);