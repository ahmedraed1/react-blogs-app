const router = require("express").Router();
const { authenticateToken } = require("../methods/user_auth");
const { testInput } = require("../methods/testInputs");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // username
  password: "", // password of database
  database: "blogs_app", // name of database
});

router.post("/", authenticateToken, (req, res) => {
  res.status(200).send({ status: true, data: req.user });
});

router.post("/user_data", authenticateToken, (req, res) => {
  const { input, password } = req.user;
  if (testInput(input, password) == "U") {
    let sql = `SELECT name, username, email, age, gen, status, major FROM accounts WHERE username = '${input}' AND password = '${password}'`;
    connection.query(sql, (error, results) => {
      if (error) return error;
      else {
        res.status(200).send(results);
      }
    });
  } else {
    let sql = `SELECT name, username, email, age, gen, status, major FROM accounts WHERE email = '${input}' AND password = '${password}'`;
    connection.query(sql, (error, results) => {
      if (error) return error;
      else {
        res.status(200).send(results);
      }
    });
  }
});

module.exports = router;
