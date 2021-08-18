const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  wage: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now().toString()
  },
  updateDate: {
    type: Date,
    required: false,
    default: Date.now().toString()

  }

});

const User = mongoose.model('EMPs', UserSchema);

module.exports = User;
