"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bookController_1 = require("../controller/bookController");
module.exports = (app) => {
    app.get("/node/allBooks", bookController_1.findAll);
    app.post("/node/AddBook", bookController_1.AddBook);
    app.get("/node/getById/:id", bookController_1.getById);
    app.delete("/node/DeleteById/:id", bookController_1.DeleteById);
};
