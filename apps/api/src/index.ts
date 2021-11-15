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
    const { query } = req;
    console.log(Object.keys(query))
    if (!Object.keys(query).length) {
        console.log(`Missing query params ${req.requestId}`)
        return res.send(`something went wrong , error: ${req.requestId}`)
    }
    next()
}

app.get("/healthcheck", (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send("Applicaiton is up")
})


app.listen(3000, () => {
    console.log("Running on port")
})




