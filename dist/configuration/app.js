"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyparser = require("body-parser");
const cors = require("cors");
const app = (0, express_1.default)();
app.use(cors());
app.use(bodyparser.json({ limit: "500mb" }));
app.use(bodyparser.urlencoded({ extended: true, limit: "500mb" }));
//app.use(bodyparser.json());
exports.default = app;
