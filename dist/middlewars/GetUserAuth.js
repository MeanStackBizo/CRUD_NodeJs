"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserAuth = void 0;
const jwt = require('jsonwebtoken');
const GetUserAuth = (req, res) => {
    var _a;
    try {
        const token = (_a = req.header("authorization")) === null || _a === void 0 ? void 0 : _a.substring(7);
        const decodedToken = jwt.verify(token, 'Token_Secret');
        return decodedToken;
    }
    catch (error) {
        return null;
    }
};
exports.GetUserAuth = GetUserAuth;
