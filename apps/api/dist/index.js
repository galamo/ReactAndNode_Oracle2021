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
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const index_1 = require("./utils/index");
const bodyParser = require('body-parser');
const cars_1 = require("./cars");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(addRequestId);
app.use(validateQuery);
app.use(bodyParser.json());
function addRequestId(req, res, next) {
    req.requestId = (0, index_1.generateReqId)();
    next();
}
function validateQuery(req, res, next) {
    console.log(`Request Started ${req.requestId}`);
    const { query } = req;
    if (!Object.keys(query).length) {
        console.log(`Missing query params ${req.requestId}`);
        return res.send(`something went wrong , error: ${req.requestId}`);
    }
    next();
}
app.get("/healthcheck", (req, res, next) => {
    res.send("Applicaiton is up");
});
app.use("/cars", cars_1.router);
// app.get("/cars", (req, res, next) => {
//     res.send("test: 1")
// })
// app.post("/car", (req, res, next) => {
//     console.log(req.body)
//     res.send("Car created!")
// })
app.get("/countries", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // for (let index = 0; index < 9999999999; index++) {
        // } DONT DO THIS
        const result = yield axios_1.default.get("https://restcountries.com/v3.1/all");
        const { data } = result;
        console.log(`data returned ${req["requestId"]}`);
        res.json({ result: data });
    }
    catch (ex) {
        res.json({ message: "something went wrong" });
    }
}));
app.use((error, req, res, next) => {
    res.status(500).send("something went wrong");
});
app.listen(5000, () => {
    console.log("Running on port", 5000);
});
