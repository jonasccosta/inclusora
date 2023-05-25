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
});

app.get("/result", function(req, res) {
    var result = {gender: wordSearcher.wordSearcher(formData.userInput, genderData), 
                    ability: wordSearcher.wordSearcher(formData.userInput, abilityData),
                    race: wordSearcher.wordSearcher(formData.userInput, raceData)};

    console.log(result);
    res.json(result);
});

app.get("/", function(req, res) {
    res.sendFile(process.cwd()+"/inclusora/dist/inclusora/index.html")
});

app.listen(port, () => {
    //console.log(process.cwd()+"/inclusora/dist/inclusora/index.html");
    //console.log(`Server listening on the port::${port}`);
});