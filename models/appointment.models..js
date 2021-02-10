const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

//create schema for todo
const appointmentSchema = new Schema({
  firstName: String,
  lastName: String,
  date: { type: Date, default: Date.now },
  phoneNumber: String,
  email: String,
  time: String,
})

//create model for todo
module.exports = mongoose.model('Appointment', appointmentSchema);
