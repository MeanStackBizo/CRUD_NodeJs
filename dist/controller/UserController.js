"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const user_1 = __importDefault(require("../model/user"));
const user_2 = __importDefault(require("../model/user"));
const env_1 = require("../middlewars/env");
exports.signup = (req, res) => {
    bcrypt
        .hash(req.body.password, 10)
        .then((hash) => {
        const user = new user_1.default({
            name: req.body.name,
            email: req.body.email,
            cin: req.body.cin,
            photo: req.body.photo,
            password: hash,
        });
        user.save()
            .then(() => res.status(201).json({
            message: 'User created !',
            status: 201
        }))
            .catch(error => res.status(400).json({ error }));
    })
        .catch((error) => {
        res.status(500).json({ message: error });
    });
};
exports.login = (req, res) => {
    user_2.default.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
            res.status(404).json({ "message": "User Not Found" });
        }
        bcrypt.compare(req.body.password, user.password).then((valid) => {
            if (!valid) {
                res.status(404).json({ "message": "Password Ghaleeeet 😒" });
            }
            res.status(200).json({
                token: jwt.sign({ userId: user._id }, env_1.secretKey),
                user: user
            });
        }).catch((error) => {
            res.status(500).json({ "message": error });
        });
    }).catch((error) => {
        res.status(500).json({ "message": error });
    });
};
