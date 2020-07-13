var mysql = require("mysql");
const util = require("util");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Fanshawsql1!",
  database: "company_cms_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  connection.querySync = util.promisify(connection.query);
});

module.exports = connection;
