"use strict";

module.exports = function(sequelize, DataTypes) {
  var Type = sequelize.define("Type", {
    id:{
      type:DataTypes.BIGINT,
      primaryKey:true,
      autoIncrement:true
    },
    typeName: DataTypes.STRING,
    typeCode: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });

  return Type;
};
