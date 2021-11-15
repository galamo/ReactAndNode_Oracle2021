import express from "express";
import axios from "axios"
import { generateReqId } from "./utils/index"
const bodyParser = require('body-parser')
import { router } from "./cars"
import cors from "cors"
const app = express();

app.use(cors())
app.use(addRequestId)
app.use(validateQuery)
app.use(bodyParser.json())


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

app.use("/cars", router)
// app.get("/cars", (req, res, next) => {
//     res.send("test: 1")
// })

// app.post("/car", (req, res, next) => {
//     console.log(req.body)
//     res.send("Car created!")
// })

app.get("/countries", async (req, res, next) => {
    try {
        // for (let index = 0; index < 9999999999; index++) {
        // } DONT DO THIS
        const result = await axios.get("https://restcountries.com/v3.1/all")
        const { data } = result;
        console.log(`data returned ${req["requestId"]}`)
        res.json({ result: data })
    } catch (ex) {
        res.json({ message: "something went wrong" })
    }
})



app.use((error, req, res, next) => {
    res.status(500).send("something went wrong")
})

app.listen(5000, () => {
    console.log("Running on port", 5000)
})




