"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = void 0;
const jwt = require('jsonwebtoken');
const env_1 = require("./env");
const fetchUser = (req, res, next) => {
    var _a;
    if (req.path.includes("user")) {
        next();
    }
    else {
        try {
            const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.substring(7);
            const decodedToken = jwt.verify(token, env_1.secretKey);
            next();
        }
        catch (error) {
            res.status(401).json({
                error: error
            });
        }
    }
};
exports.fetchUser = fetchUser;
