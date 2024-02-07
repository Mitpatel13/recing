const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  mobileNo: {
    type: String,
    required: true,
    unique: true
  },
  name:{
    type:String,
    required:false
  },
  email:{
    type:String,
    required:false,
  },
  panNumber:{
    type:String,
    required:false
  },
  aadharNumber:{
    type:String,
    required:false
  },
  address:{
    type:String,
    required:false
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema);
