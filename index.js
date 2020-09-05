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
                addDepartment()
                break;
            case "Add Employee":
                addEmployee()
                break;
            case "Add Role":
                addRole()
                break;
            case "View all Departments":
                viewDepartment()
                break;
            case "View all Employees":
                viewEmployee()
                break;
            case "View all Roles":
                viewRole()
                break;
            case "Update Employee Role":
                updateEmployee()
                break;
            default:
                connection.end()
                break;
        }
    })

}

//Function for Add Department
function addDepartment() {
    inquirer.prompt({
        type: "input",
        name: "department",
        message: "What is the name of this Department?"
    })
    .then(function(res) {
        connection.query('INSERT INTO Department (name) VALUES (?)', [res.department], function(err, data) {
            if (err) throw err; 
            console.log(`\n Successfully added ${res.department} as a department. \n`);
            userData();
        })
    })
}

//Function for Add Employee
function addEmployee() {
    inquirer.prompt([{
        type: "input",
        name: "firstName",
        message: "What is the First Name of this Employee?"
    },
    {
        type: "input",
        name: "lastName",
        message: "What is the Last Name of this Employee?"
    },
    {
        type: "input",
        name: "roleId",
        message: "What is the Role ID of this Employee?"
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the Manager's ID of this Employee?"
    }])
    .then(function(res) {
        connection.query('INSERT INTO Employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
            if (err) throw err; 
            console.log(`\n Successfully added ${res.firstName} as an employee. \n`);
            userData();
        })
    })
}

//Function for Add Role
function addRole() {
    inquirer.prompt([{
        type: "input",
        name: "title",
        message: "What is the title of this role?"
    },
    {
        type: "input",
        name: "salary",
        message: "What is the salary of this role?"
    },
    {
        type: "input",
        name: "departmentId",
        message: "What is the department ID of this role?"
    }])
    .then(function(res) {
        connection.query('INSERT INTO Role (title, salary, department_id) VALUES (?, ?, ?)', [res.title, res.salary, res.departId], function(err, data) {
            if (err) throw err; 
            console.log(`\n Successfully added ${res.title} as a role. \n`);
            userData();
        })
    })
}