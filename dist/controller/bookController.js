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
exports.UpdateBYId = exports.DeleteById = exports.getById = exports.AddBook = exports.findAll = void 0;
const book_1 = __importDefault(require("../model/book"));
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const search = req.query.search || '';
    try {
        const books = yield book_1.default.find({ title: { $regex: ".*(?i)" + search + ".*" } }).exec();
        if (books.length == 0) {
            res.status(404).json({ "message": "Not Founf" });
        }
        else {
            res.status(200).json(books);
        }
    }
    catch (err) {
        res.status(500).json({ "message": "Internal Server" });
    }
});
exports.findAll = findAll;
const AddBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.title || !req.body.author || !req.body.price) {
        res.status(400).json({ "message": "Required" });
    }
    const newbook = new book_1.default(req.body);
    try {
        yield newbook.save();
        res.status(201).json(newbook);
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
const UpdateBYId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBook = yield book_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ 'message': "Not Found" });
        }
        res.json(updatedBook);
    }
    catch (er) {
        res.status(500).json({ message: er });
    }
});
exports.UpdateBYId = UpdateBYId;
