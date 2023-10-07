"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = void 0;
const jwt = require('jsonwebtoken');
const fetchUser = (req, res, next) => {
    var _a;
    if (req.path.includes("user")) {
        next();
    }
    else {
        try {
            const token = (_a = req.header("authorization")) === null || _a === void 0 ? void 0 : _a.substring(7);
            const decodedToken = jwt.verify(token, 'Token_Secret');
            next();
        }
        catch (error) {
            res.status(401).json({
                error: error.message
            });
        }
    }
};
exports.fetchUser = fetchUser;
