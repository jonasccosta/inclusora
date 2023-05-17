const wordSearcher = require('./src/wordSearcher');

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

app.post('/', (req, res) => {
    formData = req.body;
    console.log(formData);
    console.log(wordSearcher.wordSearcher(formData.userInput));
});

app.get('/', (req,res) => {
    res.sendFile(process.cwd()+"/inclusora/dist/inclusora/index.html")
});

app.listen(port, () => {
    console.log(process.cwd()+"/inclusora/dist/inclusora/index.html");
    console.log(`Server listening on the port::${port}`);
});