const { Router } = require("express");
const { login, addAdmin } = require("../controllers/auth.controller");

const route = new Router();

route.post("/auth/login", login).post("/auth/addAdmin", addAdmin);
route.get("/auth/login", (__, res) => {
  res.render("login");
});
route.get("/auth/admin", (__, res) => {
  res.render("admin");
});

module.exports = route;
