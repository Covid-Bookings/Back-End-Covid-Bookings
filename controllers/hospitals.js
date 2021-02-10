const express = require('express');
const Hospital = require('../models/hospitals.models');

const router = express.Router();

// INDEX
router.get('/', (req, res) => {
  // plural because calling the whole of the JSON Response object 
  Hospital.find().then((hospitals) => res.json(hospitals));
});

// SSHOW
router.get('/:id', (req, res) => {
  Hospital.findById(req.params.id).then((hospital) => res.json(hospital));

});

// // CREATE
// // POST api/jobs
// router.post('/', (req, res) => {
//   Appointment.create(req.body)
//     .then((appointment) => res.json(appointment))
//   });

// // UPDATE
// // PUT api/jobs/5a7db6c74d55bc51bdf39793
// // router.put('/:id', (req, res) => {});

// // DESTROY
// // DELETE api/jobs/5a7db6c74d55bc51bdf39793
// router.delete('/:id', (req, res) => {
//   Appointment.findOneAndDelete({
//     _id: req.params.id,
//   }).then((appointment) => res.json(appointment));
// });

module.exports = router;