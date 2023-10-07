"use strict";
const UserController = require("../controller/UserController");
module.exports = (app) => {
    app.post("/signup", UserController.signup);
};
