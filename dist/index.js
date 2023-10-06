"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./Routes/index"));
const app_1 = __importDefault(require("./configuration/app"));
const dbConnect_1 = __importDefault(require("./configuration/dbConnect"));
const uri = 'mongodb://localhost:27017/biblio';
const connect = new dbConnect_1.default(uri);
connect.ConnectToBd().then(() => {
    app_1.default.use('', index_1.default);
    connect.server(app_1.default, 3000);
}).catch((error) => {
    console.log(error);
});
