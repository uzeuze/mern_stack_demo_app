var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var Resolution = require("./models/resolution");
app.use(express.static('static'));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/test");
var db = mongoose.connection;
db.on('error', (err) => {
  console.error(`Connection error: ${err}`);
  process.exit(1);
});
db.once('open', () => {
  console.log('Connected to MongoDB server.');
});

app.get('/api/resolutions', function(req,res){
  console.log("Query string ", req.query);
  var filter = {};
  if(req.query.status) {filter.status = req.query.status;}
  Resolution.find(filter, function(err, resolutions){
    if(err) { console.error(err);}
    res.json(resolutions);
  });
});

app.post('/api/resolutions/', function(req,res){
  console.log("Req body:", req.body);
  var newResolution = Resolution(req.body);
  newResolution.save(function(err, newRes){
    if(err) {return console.error(err);}
    console.log(newRes);
    return res.json(newRes);
  });
});

app.listen(3000, function(){
  console.log('Listening on port 3000!');
});
