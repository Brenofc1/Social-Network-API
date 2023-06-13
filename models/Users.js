// models/Users.js
const { Schema, model } = require('mongoose');
const Friend = require('./Friend');

const userSchema = new Schema({
  // Existing user properties
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Friend'
    }
  ]
});

const Users = model('Users', userSchema);

module.exports = Users;