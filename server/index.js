// Creating a express function
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const ObjectId = require('mongodb').ObjectId;
const port = process.env.PORT || 5000;
require('dotenv').config();
console.log(process.env.DB_PASS,process.env.DB_USER)


app.use(cors())
// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // for file


app.get("/", (req,res)=>{
    console.log("Requesting anyone");
    res.send("Hi! I have got response")
})

app.listen(port, ()=>{
    console.log("Server is running on port 5000");
})
