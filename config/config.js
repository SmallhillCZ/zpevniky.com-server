var environment = (process.env.NODE_ENV || "development");

console.log("Loading " + environment + " config.");
var env_config = require("./config." + environment + ".js");

var keys = require(`./keys.${environment}`);

module.exports = {
  server: {
    port: env_config.server.port,
    host: env_config.server.host
  },
  
  mysql: {
    ...keys.mysql
  }
};