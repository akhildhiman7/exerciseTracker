const mongoose = require('mongoose');

const exeSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: String,
    minlength: 1,
    trim: true
  },
  description: {
    required: true,
    type: Number
  },
  duration: Number,
  date: {
    type: Date
  }
});

const Exercise = mongoose.model('Exercise', exeSchema);
module.exports = {Exercise}