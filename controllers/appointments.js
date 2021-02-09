const express = require('express');
const Appointment = require('../models/appointment.models.');

const router = express.Router();

// INDEX
// GET api/jobs
router.get('/', (req, res) => {
  // Use our Job model to find all of the documents
  // in the jobs collection
  // When found, they are passed down the promise chain
  // to the `.then()` where we send the response as JSON
  // with `res.json` and pass it any jobs found
  Appointment.find().then((appointments) => res.json(appointments));
});

// SHOW
// GET api/jobs/5a7db6c74d55bc51bdf39793
router.get('/:id', (req, res) => {
  Appointment.findById(req.params.id).then((appointment) => res.json(appointment));

});

// CREATE
// POST api/jobs
router.post('/', (req, res) => {
  Appointment.findById(req.params.id).then((appointment) => res.json(appointment));
});

// UPDATE
// PUT api/jobs/5a7db6c74d55bc51bdf39793
// router.put('/:id', (req, res) => {});

// DESTROY
// DELETE api/jobs/5a7db6c74d55bc51bdf39793
router.delete('/:id', (req, res) => {
  Appointment.findOneAndDelete({
    _id: req.params.id,
  }).then((appointment) => res.json(appointment));
});

module.exports = router;