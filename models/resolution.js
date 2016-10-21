var mongoose = require("mongoose");
var resolutionSchema = mongoose.Schema({
  name: {type: String, required: true},
  status: {type: String, required: true}
});

var Resolution = mongoose.model("Resolution",resolutionSchema);
module.exports = Resolution;
