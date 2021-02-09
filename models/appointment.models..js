const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const AppointmentSchema = new Schema({
  firstName: String,
  lastName: String,
  date: { type: Date, default: Date.now },
  phoneNumber: String,
  email: String,
  time: String,
})

//create model for todo
const Appointment = mongoose.model('appointment', AppointmentSchema);

module.exports = Appointment;