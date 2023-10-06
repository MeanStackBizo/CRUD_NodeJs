import express from "express";
const router=express.Router();

require("./booksRoutes")(router);

export default router;