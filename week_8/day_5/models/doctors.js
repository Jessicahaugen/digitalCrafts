'use strict';
const {
  Model
} = require('sequelize');
const appointments = require('./appointments');
module.exports = (sequelize, DataTypes) => {
  class doctors extends Model {
    
    /**
    
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     doctors.hasMany(models.appointments)
    //  appointments.belongsTo(models.doctors,{

    //  })

    
    
   }
  };
  doctors.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'doctors',
  });
  return doctors;
};