const express = require("express");
const { getHome, saveUsers, getUsers } = require("../controllers/users.controller");
const router = express.Router();



router.get("/",getHome);
  
  router.get("/users",getUsers);
  
  router.post("/users",saveUsers);

  module.exports = router;