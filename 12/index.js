const inquirer = require("inquirer");
// const connection = require("./config/connection");
const cTable = require("console.table");
const DB = require("./DB");

function init() {
  const menuOptions = ["View data", "Add new", "Update data", "Exit"];
  // menu
  inquirer
    .prompt({
      name: "menuSelection",
      type: "list",
      choices: menuOptions,
      message: "Hi, my name is not Alexa. What can I do for you today?",
    })
    .then((answers) => {
      switch (answers.menuSelection) {
        case menuOptions[0]:
          read();
          break;
        case menuOptions[1]:
          add();
          break;
        case menuOptions[2]:
          update();
          break;
        case menuOptions[0]:
          exit();
          break;
        default:
          init();
      }
    });
}

function read() {
  DB.viewEmployees().then((data) => console.table(data));
  init();
  // const sqlPromises = [
  //   connection.querySync("SELECT * FROM department")
  //     .then(data => {console.table(data)})
  //     .catch(e => {throw e});
  //   connection.querySync("SELECT * FROM role"),
  //   connection.querySync("SELECT * FROM employee"),
  // ];
  // Promise.all(sqlPromises)
  //   .then((responses) => {
  //     responses.forEach((data) => console.table(data));
  //     // future develpment - include function wait for keystroke before calling init
  //     init();
  //   })
  //   .catch((e) => {
  //     throw e;
  //   });
}
function add() {}
function update() {}
function exit() {}

init();
