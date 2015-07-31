var config = module.exports;
var path       = require('path');
config.port = process.env.PORT || 3000;

config.path = path.normalize(path.join(__dirname, '..')),
config.postgres   = {
    host     : "ec2-54-227-249-165.compute-1.amazonaws.com",
    database : "dbeh8db9d9k5rm",
    username  : "dfofghvrygciub",
    password : "7Hz7KPnVDhuRicrLlGeJHX-ayT",
    port: 5432,
    native: true,
    dialect : "postgres"
  }
