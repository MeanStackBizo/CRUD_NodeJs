"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileUser = void 0;
const GetUserAuth_1 = require("../middlewars/GetUserAuth");
const profileUser = (req, res) => {
    const user = (0, GetUserAuth_1.GetUserAuth)(req, res);
    res.status(200).json({ message: user });
};
exports.profileUser = profileUser;
