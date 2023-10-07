"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bookController_1 = require("../controller/bookController");
module.exports = (router) => {
    router.get("/allBooks", bookController_1.findAll);
    router.post("/AddBook", bookController_1.AddBook);
    router.get("/getById/:id", bookController_1.getById);
    router.delete("/DeleteById/:id", bookController_1.DeleteById);
    router.put("/UpdateBYId/:id", bookController_1.UpdateBYId);
};
