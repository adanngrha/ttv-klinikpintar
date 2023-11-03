const Patient = require('../models/Patient');

const getPatients = async () => {
  const patients = await Patient.find();
  return patients;
}

const getPatient = async (id) => {
  const patient = await Patient.findOne({ _id: id });
  return patient;
}

const addPatient = async (patient) => {
  const newPatient = await Patient.create(patient);
  return newPatient;
}

const editPatient = async (patient) => {
  const editedPatient = await Patient.updateOne({ _id: patient._id }, patient);
  return editedPatient;
}

const deletePatient = async (id) => {
  await Patient.deleteOne({ _id: id });
}

module.exports = {
  getPatients,
  getPatient,
  addPatient,
  editPatient,
  deletePatient
}