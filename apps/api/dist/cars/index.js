"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getCars_1 = require("./getCars");
const router = express_1.default.Router();
router.get("/", (req, res, next) => {
    res.json((0, getCars_1.getCars)());
});
module.exports = { router };
