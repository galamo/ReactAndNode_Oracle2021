import express from "express"

const app = express();

app.get("/", (req: express.Request, res, next) => {
    res.send("response from api")
})

app.listen(3000)