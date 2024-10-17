//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";

var app = express();
var port = 3000;
var passwordDefault = "ILoveProgramming";
var isCorrect = false;
const _dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req,res,next){
    if(req.body["password"] === passwordDefault){
        isCorrect =true
    }
    next()
}
app.use(checkPassword)

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  console.log(req.body);
  if (isCorrect) {
    res.sendFile(_dirname + "/public/secret.html");
    isCorrect = false
  } else {
    res.sendFile(_dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log("listen in " + port);
});
