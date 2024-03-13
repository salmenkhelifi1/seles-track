const { DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

const Reference = sequelize.define('Reference', {
    idReference: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Referencename: DataTypes.STRING
  });

  module.exports=Reference;