const wordSearcher = require('./src/wordSearcher');

const genderData = require('./data/gender.json');
const abilityData = require('./data/ability.json');
const raceData = require('./data/race.json');


const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(express.static(process.cwd()+"/inclusora/dist/inclusora/"));

var formData = "";
var result = "";

app.post('/', (req, res) => {
    formData = req.body;
    console.log(formData);
    console.log(wordSearcher.wordSearcher(formData.userInput, genderData));
    console.log(wordSearcher.wordSearcher(formData.userInput, abilityData));
    console.log(wordSearcher.wordSearcher(formData.userInput, raceData));
});

app.get("/result", function(req, res) {
    res.json(wordSearcher.wordSearcher(formData.userInput, genderData));
    console.log()
    res.sendFile(process.cwd()+"/inclusora/dist/inclusora/index.html")
});

app.get("/", function(req, res) {
    res.sendFile(process.cwd()+"/inclusora/dist/inclusora/index.html")
});

app.listen(port, () => {
    //console.log(process.cwd()+"/inclusora/dist/inclusora/index.html");
    //console.log(`Server listening on the port::${port}`);
});