const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/inclusora/dist/inclusora/"));


app.post('/user', (req, res) => {
  
});

app.get('/', (req,res) => {
    
    res.sendFile(process.cwd()+"/inclusora/dist/inclusora/index.html")
});

app.listen(port, () => {
    console.log(process.cwd()+"/inclusora/dist/inclusora/index.html");
    console.log(`Server listening on the port::${port}`);
});