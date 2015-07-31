"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";

var config = require('../config/environment/common').config();
var sequelize = null;

if(process.env.HEROKU_POSTGRESQL_BRONZE_URL){
  sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    port: match[4],
    host: match[3],
    logging: true
  });
}else{
  sequelize = new Sequelize(config.postgres.database, config.postgres.username, config.postgres.password, config.postgres);
}
var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
