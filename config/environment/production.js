var config = module.exports;
var path       = require('path');
config.port = process.env.PORT || 3000;

config.path = path.normalize(path.join(__dirname, '..')),
config.postgres   = {
    host     : "127.0.0.1",
    database : "well-licenses-dev",
    username  : "postgres",
    password : "password",
    dialect : "postgres"
  }
