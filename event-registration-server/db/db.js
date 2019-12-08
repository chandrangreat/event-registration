const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/eventy', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;