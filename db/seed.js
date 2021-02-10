/// Require the Appointment model
const Appointment = require('../models/appointment.models.');
const Hospital = require('../models/hospitals.models');
// Require the data
const seedData = require('./appointmentseeds.json');
const hospitalData =  require('./hospitalseeds.json');

// Delete any existing documents in the jobs collection
Appointment.deleteMany()
  // Use insertMany and pass it the seed data
  .then(() => Appointment.insertMany(seedData))
  // Log the successful results
  .then(console.log)
  // Log any errors if things didn't work
  .catch(console.error)
  // Use finally, so that this code will run whether or not
  // things worked and close our connection to the database.
  .finally(process.exit);

  // Delete any existing documents in the jobs collection
Hospital.deleteMany()
// Use insertMany and pass it the seed data
.then(() => Hospital.insertMany(hospitalData))
// Log the successful results
.then(console.log)
// Log any errors if things didn't work
.catch(console.error)
// Use finally, so that this code will run whether or not
// things worked and close our connection to the database.
.finally(process.exit);