"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bookController_1 = require("../controller/bookController");
module.exports = (app) => {
    app.get("/allBooks", bookController_1.findAll);
    app.post("/AddBook", bookController_1.AddBook);
    app.get("/getById/:id", bookController_1.getById);
    app.delete("/DeleteById/:id", bookController_1.DeleteById);
    app.put("/UpdateBYId/:id", bookController_1.UpdateBYId);
};
