import express from "express";
import {fetchUser} from "../middlewars/Isauth"
import {profileUser} from "../controller/ProfileController"
const router=express.Router();

router.use(fetchUser);

require("./booksRoutes")(router);
require("./UserRoutes")(router);
// router.get("/profile",profileUser)

export default router;