# Data Model Documentation

MongoDB database was used for this application. Used Mongoose ODM to create schema

1. Event Schema

There can be many events created by a user.
There can be many events in which users can participate. Hence the schema for Event is simple one with an array of Objects as configurable fields.

```
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
```

2. User Schema

Users can be associated to events whether they created an event or participated in one.
Hence we are referencing the event from the event collection in the below schema.

```
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
```