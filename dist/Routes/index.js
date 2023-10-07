"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Isauth_1 = require("../middlewars/Isauth");
const router = express_1.default.Router();
router.use(Isauth_1.fetchUser);
require("./booksRoutes")(router);
require("./UserRoutes")(router);
exports.default = router;
