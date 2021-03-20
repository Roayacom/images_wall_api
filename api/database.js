var mysql = require('mysql');

var con = mysql.createConnection({
  host: "photosdb.cz7ggnqjyxxp.eu-west-1.rds.amazonaws.com",
  user: "admin",
  password: "admin4321",
  database:'photosDB'
});

con.connect();

module.exports=con;