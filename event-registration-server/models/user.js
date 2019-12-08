const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  password: String,
  scopes: {
    type: [String],
    required: false,
    default: []
  },
  created_events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'event',
    required: false
  }],
  participated_events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'event',
    required: false
  }]
})

mongoose.model('user', UserSchema);