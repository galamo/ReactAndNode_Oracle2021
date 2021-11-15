import express from "express";

import { generateReqId } from "./utils/index"

const app = express();

app.use(addRequestId)
app.use(validateQuery)

function addRequestId(req, res, next) {
    req.requestId = generateReqId()
    next()
}

function validateQuery(req, res, next) {
    console.log(`Request Started ${req.requestId}`)
    const { query } = req;
    if (!Object.keys(query).length) {
        console.log(`Missing query params ${req.requestId}`)
        return res.send(`something went wrong , error: ${req.requestId}`)
    }
    next()
}

app.get("/healthcheck", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send("Applicaiton is up")
})

app.get("/cars", (req, res, next) => {

    res.send("test: 1")
})


app.listen(3000, () => {
    console.log("Running on port")
})




