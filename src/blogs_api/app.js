const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:5173", // Change this to the actual origin of your web application
  credentials: true,
};

app.use(cors(corsOptions));

const loginRoutes = require("./register/login");
const signupRoutes = require("./register/signup");
const auth = require("./register/auth");
app.use("/login", loginRoutes);
app.use("/signup", signupRoutes);
app.use("/auth", auth);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on localhost:${port}`);
});
