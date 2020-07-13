conneciton = require("./config/connection");

class DB {
  consturctor(connection) {
    this.connection = connection;
  }
  viewEmployees() {
    return this.connection.querySync("SELECT * FROM employee");
  }
}

module.exports = new DB(connection);
