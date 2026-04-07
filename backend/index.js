const express = require("express");
const app = express();
const cors = require("cors");
const DB = require("./config/DB");
require("dotenv").config()
DB()
app.use(cors({ 
    "origin": ["http://localhost:5173"]
}))
app.use(express.json())

let userRoute  = require("./routes/userRoutes.js")

app.use("/api/user/",userRoute)


app.listen(process.env.PORT, (err) => {
    console.log(err || "Server Run on Port" + process.env.PORT)
})