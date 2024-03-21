const path = require("path");

const users = require("../models/users.model");

const getHome = (req, res) => {
  res.send("welcome to server");
};

const getUsers = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};

const saveUsers = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const user = {
    name,
    age,
  };
  users.push(user);
  res.status(202).json({
    success: true,
    users,
  });
};

module.exports = {
  getHome,
  saveUsers,
  getUsers,
};
