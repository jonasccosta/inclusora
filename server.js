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

app.get('/', (req,res) => {

   // const filePath = process.cwd() + "/inclusora/dist/inclusora/index.html";
  
    // Send the JSON response
    console.log("GOTTEN");
    result = wordSearcher.wordSearcher(formData.userInput, genderData)[0][0];
    console.log(result);
    res.json(result);

    // Serve the HTML file
    //res.sendFile(filePath);
});

app.listen(port, () => {
    console.log(process.cwd()+"/inclusora/dist/inclusora/index.html");
    console.log(`Server listening on the port::${port}`);
});