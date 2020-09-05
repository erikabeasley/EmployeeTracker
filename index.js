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
});

//Initialize connection
connection.connect(function (err) {
    if (err) throw err;
    //console ID the user is connected as
    console.log(`\n connected as ID ${connection.threadId}\n`);
    userData();
});

//Prompt user for data using inquirer
function userData() {
    inquirer.prompt({
        message: "Choose what you would like to do:",
        type: "list",
        choices: [
            "Add Department",
            "Add Employee",
            "Add Role",
            "View all Departments",
            "View all Employees",
            "View all Roles",
            "Update Employee Role",
            "Exit"
        ],
        name: "choice"
    })
    .then(result => {
        //Switch case set-up
        switch (result.choice) {
            case "Add Department":
                addDepartment();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add Role":
                addRole();
                break;
            case "View all Departments":
                viewDepartment();
                break;
            case "View all Employees":
                viewEmployee();
                break;
            case "View all Roles":
                viewRole();
                break;
            case "Update Employee Role":
                updateEmployee();
                break;
            default:
                connection.end()
                break;
        }
    })

}