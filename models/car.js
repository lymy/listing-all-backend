var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CarSchema = new Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  description: String,
  available: Boolean
});

var Car = mongoose.model("Car", CarSchema);
module.exports = Car;
