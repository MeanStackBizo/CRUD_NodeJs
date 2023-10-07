import express from "express";
import {fetchUser} from "../middlewars/Isauth"
const router=express.Router();

router.use(fetchUser);

require("./booksRoutes")(router);
require("./UserRoutes")(router);

export default router;