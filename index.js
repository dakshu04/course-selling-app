const express = require('express')
const app = express()
const port = 3000

app.post("/user/signup", function(req, res) {
    res.json({
        message:"signup endpoint"
    })
})

app.post("/user/signin", function(req, res) {
    res.json({
        message:"signin endpoint"
    })
})

app.get("/user/purchases", function(req, res) {
    res.json({
        message:"purchased courses"
    })
})

app.post("/course/purchases", function(req, res) {
    res.json({
        message:"want to purchased courses"
    })
})

app.get("/course", function(req, res) {
    res.json({
        message:"courses"
    })
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})