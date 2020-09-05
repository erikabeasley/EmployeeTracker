//Install Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");
require("console.table");

//MUST use user specific DB name and DB password
var connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "medicine",
    database: "employees_DB"
})