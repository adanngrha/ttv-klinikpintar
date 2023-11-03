const { getPatients, getPatient, addPatient, editPatient, deletePatient } = require('../services/patients.service');
const { v4: uuidv4 } = require('uuid');

const getAll = async (req, res) => {
  try {
    const patients = await getPatients();

    if (patients.length === 0) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "No patients found",
      });
    }

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Patients found",
      data: patients,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      code: 500,
      message: "Internal server error",
      data: err,
    });
  }
}

const getOne = async (req, res) => {
  try {
    const patient = await getPatient(req.params.id);

    if (!patient) {
      return res.status(404).json({
        status: "failed",
        code: 404,
        message: "Patient not found",
      });
    }

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Patient found",
      data: patient,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      code: 500,
      message: "Internal server error",
      data: err,
    });
  }
}

const create = async (req, res) => {
  try {
    const patientId = `patient-${uuidv4()}`
    const createdAt = new Date().toISOString();
    const patient = await addPatient({
      _id: patientId,
      ...req.body,
      created_at: createdAt,
    });

    return res.status(201).json({
      status: "success",
      code: 201,
      message: "Patient created",
      data: patient,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      code: 500,
      message: "Internal server error",
      data: err,
    });
  }
}

const update = async (req, res) => {
  try {
    const patient = await editPatient(req.body);

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Patient updated",
      data: patient,
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      code: 500,
      message: "Internal server error",
      data: err,
    });
  }

}

const remove = async (req, res) => {
  try {
    await deletePatient(req.params.id);

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Patient deleted",
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      code: 500,
      message: "Internal server error",
      data: err,
    });
  }

}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
}