"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileUser = void 0;
const GetUserAuth_1 = require("../middlewars/GetUserAuth");
const profileUser = (req, res) => {
    try {
        const user = (0, GetUserAuth_1.GetUserAuth)(req);
        console.log("Received User:", user);
        res.status(200).json({ message: user });
    }
    catch (Error) {
        res.status(500).json({ message: Error });
    }
};
exports.profileUser = profileUser;
