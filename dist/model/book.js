"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//import mongoosePaginate from "mongoose-paginate"
let bookSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    available: {
        type: Boolean,
        requires: true,
        default: false
    },
    publishingDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});
const book = mongoose_1.default.model("book", bookSchema);
exports.default = book;
