const wordSearcher = require('./src/wordSearcher');

const genderData = require('./data/gender.json');
const abilityData = require('./data/ability.json');
const raceData = require('./data/race.json');


const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(express.static(process.cwd()+"/dist/inclusora/"));

var formData = ""
app.post('/', (req, res) => {
    formData = req.body;
});

app.get("/result", function(req, res) {
    var result = {gender: wordSearcher.wordSearcher(formData.userInput, genderData), 
                    ability: wordSearcher.wordSearcher(formData.userInput, abilityData),
                    race: wordSearcher.wordSearcher(formData.userInput, raceData)};

    res.json(result);
});

app.get("/", function(req, res) {
    res.sendFile(process.cwd()+"/dist/inclusora/index.html")
});

app.listen(port, () => {
    console.log(process.cwd()+"/dist/inclusora/index.html");
    console.log(`Server listening on the port::${port}`);
});