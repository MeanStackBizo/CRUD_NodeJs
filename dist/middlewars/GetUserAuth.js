"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserAuth = void 0;
const jwt = require('jsonwebtoken');
const env_1 = require("./env");
const GetUserAuth = (req) => {
    var _a;
    try {
        const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.substring(7);
        const decodedToken = jwt.verify(token, env_1.secretKey);
        return decodedToken;
    }
    catch (error) {
        return null;
    }
};
exports.GetUserAuth = GetUserAuth;
