const express = require("express");
const app = express();

const config = require("../config");

const moment = require("moment");
moment.locale("cs");

const mysql = require("mysql");
const mysql_conn = mysql.createConnection(config.mysql);
mysql_conn.connect(err => err ? console.error(err) : console.log("Connected to database " + config.mysql.database));



const http = require("http");

http.createServer(app).listen(config.server.port, config.server.host, function () {
  console.log('Listening on ' + config.server.host + ':' + config.server.port + '!');
});