"use strict";

module.exports = function(sequelize, DataTypes) {
  var Status = sequelize.define("Status", {
    id:{ type:DataTypes.BIGINT,
      primaryKey:true,
      autoIncrement:true
    },
    statusName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        
      }
    }
  });

  return Status;
};
