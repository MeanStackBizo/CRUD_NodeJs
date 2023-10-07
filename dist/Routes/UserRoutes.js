"use strict";
const UserController = require("../controller/UserController");
module.exports = (app) => {
    app.post("/user/signup", UserController.signup);
    app.post("/user/login", UserController.login);
};
