import express from "express"
import { getCars } from "./getCars"

const router = express.Router()

router.get("/", (req, res, next) => {
    res.json(getCars())
})

module.exports = { router };