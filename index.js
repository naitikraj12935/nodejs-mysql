import express from 'express';
import mysql from 'mysql2';
import Emprouter from './Router/employee.js';
const app = express();

//using mysql driver

const con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "bhopal",
  database:"quantiphi"
});

app.use(express.json());

app.use('/add',Emprouter)

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

export default con;
