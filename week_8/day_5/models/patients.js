'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     patients.hasMany(models.appointments)
    //  appointments.belongsToMany(models.patients,{

    //  })
     patients.hasMany(models.doctors)

    
    
   
    }
  };
  patients.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'patients',
  });
  return patients;
};