const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  email: String,
  dob: Date,
  gender: String,
  address: String,
});

module.exports = mongoose.model('User', userSchema);
