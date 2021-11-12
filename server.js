const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const slackServices = require("./slackServices")

app.get("/", (req,res) => {
    slackServices.postActivity("웹사이트 접속", "");
    res.sendFile(path.join(__dirname, "main_version2.html"));
})

app.use(express.static('public'))

// app.get("/hi", (req,res) => {
//     res.sendFile(path.join(__dirname, "hi.html"));
// })

app.listen(3000, (req,res) => {
    console.log("listening on port 3000")
})