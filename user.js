const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
    minlength: 1,
    trim: true
  }
});

const User = mongoose.model('User', userSchema);
module.exports = {User}