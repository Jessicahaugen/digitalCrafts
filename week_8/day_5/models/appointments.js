'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      appointments.belongsToMany(models.doctors, {
        through: "doctor_appointments",
      })
      appointments.belongsToMany(models.patients, {
        through: "patient_appointments",
      })
    }
  };
  appointments.init({
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'appointments',
  });
  return appointments;
};