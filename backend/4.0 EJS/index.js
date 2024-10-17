import express from "express"
import bodyParser from "body-parser"

var app = express()
var port = 3000;



app.get('/', (req,res) =>{
    let d = new Date("October 20, 2024");
    let day = d.getDay();
    let message1 = "Hey! It's weekday, "
    let message2 = "it's time to work hard"

    if(day ==0 || day == 6){
        message1 = "Hey! It's weekend, ";
        message2 = "it's time to have fun";
    }
    res.render('index.ejs', {
        message1: message1,
        message2: message2 
    })
})

app.listen(port, () => {
    console.log('listen in '+ port)
})