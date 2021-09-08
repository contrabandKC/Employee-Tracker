var mysql = require("mysql");
require("console.table");


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



  function allEmployees(){
    var query = "SELECT * FROM employees.employee"
    connection.query(query, function(err, res){
        if (err) throw err;
        // console.log(res)
        console.table(res)
        
    })
}


module.exports = {
    allEmployees: allEmployees
}