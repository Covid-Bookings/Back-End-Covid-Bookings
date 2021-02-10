const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const hostpitalSchema = new Schema({
  name: String,
  address: String,
  phoneNumebr: String,
  hours: String,
  website: String,
})

module.exports = mongoose.model('Hospital', hostpitalSchema);