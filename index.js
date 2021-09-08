const logo = require("asciiart-logo");
var inquirer = require("inquirer");
var mysql = require("mysql");
require("console.table");

const db = require("./db/index")



var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "employees"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    init();
  });



function init(){
    const logoText = logo({name: "Employee Manager"}).render();

    console.log(logoText)

    loadMainPrompts()
}

function loadMainPrompts(){
    inquirer.prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices:[
            "View all employees",
            "View all employees by department",
            "View all employees by Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update employee manager",
            "View all roles",
            "Add role",
            "Remove role",
            "View all departments",
            "Add Department",
            "Remove Department",
            "Exit"

        ]

    }).then(function(answer){
        switch(answer.action){
            case "View all employees":
                allEmployees()
                // loadMainPrompts()
                break;

            case "View all employees by department":

                break;

            case "View all employees by Manager":

                break;

            case "Add Employee":

                break;  
                
            case "Remove Employee":

                break;

            case "Update Employee Role":

                break;


            case "Update employee manager":

                break;

            case "View all roles":

                break;

            case "Add role":

            break;

            case "Remove role":

                break;

            case "View all departments":

                break;

            case "Add Department":

                break;

            case "Remove Department":

                break;

            case "Exit":

                break;

        }
    })
}

function allEmployees(){
    var query = "SELECT * FROM employees.employee"
    connection.query(query, function(err, res){
        if (err) throw err;
        // console.log(res)
        console.table(res)

        loadMainPrompts()
    })
}

