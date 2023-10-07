"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const user_1 = __importDefault(require("../model/user"));
exports.signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield bcrypt
        .hash(req.body.password, 10)
        .then((hash) => {
        const user = new user_1.default({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            Cin: req.body.cin,
            Photo: req.body.photo,
        });
        user.save()
            .then(() => res.status(201).json({
            message: 'User created !',
            status: 201
        }))
            .catch(error => res.status(400).json({ error }));
        // try {
        //   const savedUser = user.save();
        //   res.status(201).json({ "message": "User Created" });
        // } catch (err) {
        //   res.status(500).json({ message: err });
        // }
    })
        .catch((error) => {
        res.status(500).json({ message: error });
    });
});
