"use strict";

module.exports = function(sequelize, DataTypes) {
  var License = sequelize.define("License", {
    licenseId:{
      type:DataTypes.BIGINT,
      primaryKey:true,
      autoIncrement:true
    },
    nameOfApplicant: DataTypes.STRING,
    companyName: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    townshipName: DataTypes.STRING,
    dateOfLicense: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        License.belongsTo(models.Status, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });

        License.belongsTo(models.Type, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return License;
};
