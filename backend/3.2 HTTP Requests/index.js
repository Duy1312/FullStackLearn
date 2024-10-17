
import express from "express"

const app = express()
const port = 3000

app.get("/", (req,res) => {
// console.log(req.rawHeaders)
    res.send("Hello World")
})

app.get("/contact", (req,res) =>{
    res.send('<h1>Contact page</h1>')
})

app.get("/about", (req,res) =>{
    res.send('<h1>About Page</h1>')
})

app.listen(port, ()=>{
    console.log(`Welcome to ${port}`)
})