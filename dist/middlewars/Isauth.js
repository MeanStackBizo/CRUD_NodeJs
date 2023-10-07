"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = void 0;
const jwt = require('jsonwebtoken');
const fetchUser = (req, res, next) => {
    var _a;
    // res.status(401).json({error: req.path});
    //});
    if (req.path.includes("user")) {
        next();
    }
    else {
        try {
            const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
            const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
            const userId = decodedToken.userId;
            if (!req.headers.userid) {
                throw 'Bad userID request';
            }
            else if (req.headers.userid !== userId) {
                throw 'Invalid user ID';
            }
            else {
                next();
            }
        }
        catch (error) {
            res.status(401).json({
                error: error.message
            });
        }
    }
};
exports.fetchUser = fetchUser;
