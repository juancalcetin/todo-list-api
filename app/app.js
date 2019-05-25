const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const morgan = require('morgan')
const cors = require('cors')

//database
const { db, port } = require("./config")

//router
const router = require("./routes")

//init app
const app = express()

app.use(morgan(":method :url :status :res[content-length] - response-time ms"))
app.use(bodyParser.json())
app.use("/api/v1", router)
app.use(cors())
app.use((req, res, next)=>{
    res.status(404).json({message: 'endpoint no found'})
})

//db connection
mongoose.connect(db.url, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true});
const mongo = mongoose.connection;
mongo.on("error", (error) => console.log("Failed to connect to mongo", error))
     .once("open", () => console.log(`Connected to database in port ${port}`));
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.status(404).json({message: 'Endpoint no fund'})
})

module.exports = app