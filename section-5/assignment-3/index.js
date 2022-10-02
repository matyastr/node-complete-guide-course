const path = require('path');

const express = require("express");

const rootDir = require('./util/path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/users", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "default.html"));
});

app.listen(3000);
