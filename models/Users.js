const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mobileNo: {
    type: String,
    required: true,
    unique: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema);
