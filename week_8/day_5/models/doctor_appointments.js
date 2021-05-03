'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctorAppointments extends Model {
    static associate(models) {
      doctorAppointments.hasOne(models.doctors, {
        foreignKey: "doctorID",
      });
      doctorAppointments.hasOne(models.patients, {
        foreignKey: "patientID",
      });
    }
  };
  doctorAppointments.init({
      // patientID: <integer>
  }, {
    sequelize,
    modelName: 'doctor_appointments',
  });
  return doctorAppointments;
};