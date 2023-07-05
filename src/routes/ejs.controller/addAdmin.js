const { Router } = require("express");

const route = Router();

route.get("/auth/addAdminController", (__, res) => {
  res.render("ejsController/addAdmin.controll.ejs");
});

module.exports = route;
