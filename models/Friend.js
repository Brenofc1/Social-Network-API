// models/Friend.js
const mongoose = require('mongoose');

const FriendSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  }
});

const Friend = mongoose.model('Friend', FriendSchema);

module.exports = Friend;