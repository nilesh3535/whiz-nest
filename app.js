const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.render("whiznest-policy", {
    title: "Whiz Nest Policy",
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log("___Server has started sucessfully.")
);
