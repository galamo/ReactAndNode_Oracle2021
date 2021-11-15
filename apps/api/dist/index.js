"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./utils/index");
const app = (0, express_1.default)();
app.use(addRequestId);
app.use(validateQuery);
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
app.get("/cars", (req, res, next) => {
    res.send("test: 1");
});
app.listen(3000, () => {
    console.log("Running on port");
});
