import express from "express";
const router=express.Router();

require("./booksRoutes")(router);
require("./UserRoutes")(router);

export default router;