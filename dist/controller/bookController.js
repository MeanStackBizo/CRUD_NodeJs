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
exports.DeleteById = exports.getById = exports.AddBook = exports.findAll = void 0;
const book_1 = __importDefault(require("../model/book"));
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_1.default.find().exec();
        res.status(200).json(books);
    }
    catch (err) {
        res.status(500).json({ "message": "Internal Server" });
    }
});
exports.findAll = findAll;
const AddBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, author } = req.body;
    if (!title || !author) {
        res.status(400).json({ "message": "Required" });
    }
    const newbook = new book_1.default({ title, author });
    try {
        const savebook = yield newbook.save();
        res.status(201).json(savebook);
    }
    catch (err) {
        res.status(400).json({ message: err });
    }
});
exports.AddBook = AddBook;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book_found = yield book_1.default.findById(req.params.id);
        if (!book_found) {
            res.status(404).json({ "message": "Not Found" });
        }
        res.status(200).json(book_found);
    }
    catch (er) {
        res.status(505).json({ message: er });
    }
});
exports.getById = getById;
const DeleteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletebook = yield book_1.default.findByIdAndDelete(req.params.id);
        if (!deletebook) {
            return res.status(404).json({ 'message': "Not Found" });
        }
        res.status(200).json({ 'message': "Delete success" });
    }
    catch (er) {
        res.status(500).json({ message: er });
    }
});
exports.DeleteById = DeleteById;
