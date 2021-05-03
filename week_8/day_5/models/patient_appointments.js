'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patientAppointments extends Model {
    static associate(models) {
      patientAppointments.hasOne(models.doctors, {
        foreignKey: "doctorID",
      });
      patientAppointments.hasOne(models.patients, {
        foreignKey: "patientID",
      });
    }
  };
  patientAppointments.init({}, {
    sequelize,
    modelName: 'patient_appointments',
  });
  return patientAppointments;
};