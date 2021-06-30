const express = require('express')
const app = express()
const final = require('./final');


app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => res.send(final));


app.listen(process.env.PORT || 3000, function () {
    console.log("server running on port 3000");
  });