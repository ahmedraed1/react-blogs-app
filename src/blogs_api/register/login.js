const router = require("express").Router();
const { testInput } = require("../methods/testInputs");
const mysql = require("mysql2");
const { jwtSing } = require("../methods/user_auth");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // username
  password: "", // password of database
  database: "blogs_app", // name of database
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database!");
  }
});
router.post("/", (req, res) => {
  const { input, password } = req.body;

  // Check if the input was an email
  if (testInput(input, password) == "E") {
    let sql = `SELECT email, password FROM accounts WHERE email = '${input}' AND password = '${password}'`;
    connection.query(sql, (error, results) => {
      if (error)
        res
          .status(404)
          .send({ status: false, token: undefined, message: "ERROR!" });
      else {
        let find = results.find(
          (item) => item.email == input && item.password == password
        );
        if (find) {
          res.status(200).send({
            status: true,
            token: jwtSing(
              { input, password },
              process.env.ACCESS_SECRET_KEY,
              "1h"
            ),

            message: "The account already exists.",
          });
        } else {
          res.status(200).send({
            status: false,
            token: undefined,
            message: "The account does not exists.",
          });
        }
      }
    });
  }
  // Check if the input was username
  else if (testInput(input, password) == "U") {
    let sql = `SELECT username, password FROM accounts WHERE username = '${input}' AND password = '${password}'`;
    connection.query(sql, (error, results) => {
      if (error)
        res
          .status(404)
          .send({ status: false, token: undefined, message: "ERROR!" });
      else {
        let find = results.find(
          (item) => item.username == input && item.password == password
        );
        if (find) {
          res.status(200).send({
            status: true,
            token: jwtSing(
              { input, password },
              process.env.ACCESS_SECRET_KEY,
              "1h"
            ),
            message: "The account already exists.",
          });
        } else {
          res.status(200).send({
            status: false,
            token: undefined,
            message: "The account does not exists.",
          });
        }
      }
    });
  }
});

module.exports = router;
