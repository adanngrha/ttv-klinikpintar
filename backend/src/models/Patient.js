const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  _id: String,
  name: String,
  gender: String,
  age: Number,
  blood_pressure: String,
  pulse: Number,
  body_temperature: Number,
  respiratory_rate: Number,
  created_at: Date,
})

module.exports = mongoose.model('Patient', patientSchema);