var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('static'));
app.use(bodyParser.json());
var resolutions = [{ id: 1, name: "React", status: "Incomplete" },
 { id: 2, name: "MongoDB", status: "Incomplete" },
 { id: 3, name: "Express", status: "Incomplete" }
]

app.get('/api/resolutions', function(req,res){
  res.json(resolutions);
});

app.post('/api/resolutions/', function(req,res){
  console.log("Req body:", req.body);
  var newResolution = req.body;
  newResolution.id = resolutions.length + 1;
  resolutions.push(newResolution);
  res.json(resolutions);
});

app.listen(3000, function(){
  console.log('Listening on port 3000!');
});
