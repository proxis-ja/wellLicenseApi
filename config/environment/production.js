var config = module.exports;
var path       = require('path');
config.port = process.env.PORT || 3000;

config.path = path.normalize(path.join(__dirname, '..')),
config.postgres   = {
    host     : "ec2-54-235-134-128.compute-1.amazonaws.com",
    database : "d2k9e6i5fklk7m",
    username  : "mzwwheowfssydq",
    password : "xGHlVlWv58NWR4t1igBeGobF8e",
    port: 5432,
    native: true,
    dialect : "postgres"
  }
